class AccountService {
    // ----------------------------------------------------------------------------------
    async createAccount(args) {

        let {
            //
            userId, currency
        } = args;


        this.BizError.paramsErrorIfAnyNone({
            userId, currency
        });


        const id = await this.idgen.next();
        const account = this.Account.build({
            id: id,
            userId: userId,
            currency: currency,
            balance: BigInt(0),
            freezeBalance: BigInt(0),
        });
        await account.save();
        return id;
    }


    async getCreateAccount(args) {
        const {
            //
            userId, currency
        } = args;

        this.BizError.paramsErrorIfAnyNone({
            userId, currency
        });

        const accountId = await this.getUserAccountId({
            userId, currency
        });

        if (accountId) {
            return accountId;
        }

        return await this.createAccount(userId, currency);
    }


    // rules 一个 user 一个 currency 只能有一个 account
    async getUserAccountId(args) {
        let {
            //
            userId, currency
        } = args;

        this.BizError.paramsErrorIfAnyNone({
            userId, currency
        });

        const account = await this.Account.findOne({
            where: {
                userId: userId,
                currency: currency,
            },
        });

        if (account) {
            return account.id;
        }

        return await this.createAccount({userId, currency});
    }

    async getAccount(args) {
        const {
            //
            id,
        } = args;

        this.BizError.paramsErrorIfAnyNone({
            id,
        });

        return await this.Account.findOne({
            where: {
                id: id,
            },
        });
    }

    async add(args) {
        //
        const accounting = await this._createAccounting(args);
        await this._opt({
            accountingId: accounting.id,
            accountId: args.accountId,
            amount: args.amount,
            opt: this.AccountOpts.add,
            tx: args.tx,
        });
        return accounting.id;
    }

    async reduce(args) {
        //
        const accounting = await this._createAccounting(args);
        await this._opt({
            accountingId: accounting.id,
            accountId: args.accountId,
            amount: args.amount,
            opt: this.AccountOpts.reduce,
            tx: args.tx,
        });
        return accounting.id;
    }

    async freeze(args) {
        //
        const accounting = await this._createAccounting(args);
        await this._opt({
            accountingId: accounting.id,
            accountId: args.accountId,
            amount: args.amount,
            opt: this.AccountOpts.freeze,
            tx: args.tx,
        });
        return accounting.id;

    }

    async unfreeze(args) {
        //
        const accounting = await this._createAccounting(args);
        await this._opt({
            accountingId: accounting.id,
            accountId: args.accountId,
            amount: args.amount,
            opt: this.AccountOpts.unfreeze,
            tx: args.tx,
        });
        return accounting.id;
    }

    async transfer(args) {
        const {
            fromAccountId,
            toAccountId,
            amount,
        } = args;

        const options = [
            {
                accountId: fromAccountId,
                amount: amount,
                opt: this.AccountOpts.reduce,
            },
            {
                accountId: toAccountId,
                amount: amount,
                opt: this.AccountOpts.add,
            }
        ];
        args.options = options;
        await this.batch(args);
    }


    async _createAccounting(args) {
        const {
            tradeOrderId,
            bizKey,
            description,
            tx
        } = args;
        this.BizError.paramsErrorIfAnyNone({
            tradeOrderId,
            bizKey,
        });

        // todo 处理迷瞪，如果幂等了就直接返回 accounting

        const id = await this.idgen.next();
        const accounting = this.Accounting.build({id: id});
        accounting.tradeOrderId = tradeOrderId;
        accounting.bizKey = bizKey;
        accounting.description = description;
        await accounting.save({transaction: tx});
        return accounting;
    }

    async _opt(args) {

        const {
            //
            accountingId,
            accountId,
            amount,
            opt,
            tx
        } = args;


        const account = await this.Account.findOne({
            where: {
                id: accountId,
            },
            transaction: tx,
            lock: true,
        });

        this.BizError.accidentIf(!account, `账户不存在 ${accountId}`);
        args.account = account;
        await this._recordOpt(args);
        await account.save({transaction: tx});
    }


    // 只操作账号 balance 和记录 record ，但是不保存 account
    async _recordOpt(args) {

        const {
            //
            accountingId,
            account,
            amount,
            opt,
            tx
        } = args;


        this.BizError.paramsErrorIfAnyNone({
            accountingId,
            account,
            amount,
            opt,
            tx,
        });


        //
        const balance = account.balance;
        const freezeBalance = account.freezeBalance;

        let postBalance = balance;
        let postFreezeBalance = freezeBalance;
        //
        switch (opt) {
            case this.AccountOpts.add:
                postBalance = balance + amount;
                break;
            case this.AccountOpts.reduce:
                postBalance = balance - amount;
                this.BizError.errIf(postBalance < 0, this.CommonBizCodeMessages.balance_insufficient);
                break;
            case this.AccountOpts.freeze:
                this.BizError.errIf(balance - amount - freezeBalance < 0, this.CommonBizCodeMessages.balance_insufficient);
                postFreezeBalance = freezeBalance + amount;
                break;
            case this.AccountOpts.unfreeze:
                this.BizError.errIf(freezeBalance < amount, this.CommonBizCodeMessages.freeze_balance_insufficient);
                postFreezeBalance = freezeBalance - amount;
                break;
            default:
                this.BizError.accidentIf(true, 'no opt matched');
                break;
        }

        //
        account.balance = postBalance;
        account.freezeBalance = postFreezeBalance;

        //
        // 加流水
        const recordId = await this.idgen.next();
        const accountRecord = this.AccountRecord.build({id: recordId});
        accountRecord.amount = amount;
        accountRecord.opt = opt;
        accountRecord.accountId = account.id;
        accountRecord.accountingId = accountingId;
        accountRecord.preBalance = balance;
        accountRecord.preFreezeBalance = freezeBalance;
        accountRecord.postBalance = postBalance;
        accountRecord.postFreezeBalance = postFreezeBalance;
        await accountRecord.save({transaction: tx});
    }


    async batch(args) {
        const {
            tx,
            options
        } = args;
        this.BizError.paramsErrorIfAnyNone({
            tx,
            options,
        });
        const accounting = await this._createAccounting(args);


        const accountMap = {};

        for (const option of options) {
            accountMap[option.accountId] = true;
        }

        // sort accountIdMap keys
        const accountIds = Object.keys(accountMap).sort();

        for (const accountId of accountIds) {
            const account = await this.Account.findOne({
                where: {
                    id: accountId,
                },
                transaction: tx,
                lock: true,
            });
            this.BizError.accidentIf(!account, `账户不存在 ${accountId}`);

            accountMap[accountId] = account;
        }

        // records opt
        for (const option of options) {
            await this._opt({
                accountingId: accounting.id,
                accountId: option.accountId,
                amount: option.amount,
                opt: option.opt,
                tx: tx,
            });
        }

        // update accounts
        for (const accountId of accountIds) {
            const account = accountMap[accountId];
            await account.save({transaction: tx});
        }

        return accounting.id;
    }


    async listAccountRecords(args) {
        this.log.info(args);
        let {userId, page, pageSize} = args;
        page = page || 0;
        this.BizError.paramsErrorIfAnyNone({
            userId,
            pageSize,
        });

        return await this.AccountRecord.findAndCountAll({
            where: {
                userId: userId,
            },
            order: [['createdAt', 'DESC']],
            limit: pageSize,
            offset: page * pageSize,
        });
    }


}

module.exports = AccountService;
