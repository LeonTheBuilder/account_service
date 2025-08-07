const assert = require('assert');
const loadContext = require('../../loadcontext');


const testCurrency = 'cny';

it('accountService.createAccount', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    const newUserId = await a.beans.idgen.nextId();
    const id = await accountService.createAccount({
        userId: newUserId,
        currency: testCurrency
    });
    console.log(id);
    const currentUserAccountId = await accountService.getUserAccountId({
        userId: newUserId,
        currency: testCurrency
    });
    console.log(currentUserAccountId);
});


it('accountService.getCreateAccount', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    const newUserId = await a.beans.idgen.nextId();
    const id = await accountService.getCreateAccount({
        userId: newUserId,
        currency: testCurrency
    });
    console.log(id);
    const currentUserAccountId = await accountService.getUserAccountId({
        userId: newUserId,
        currency: testCurrency
    });
    console.log(currentUserAccountId);
});


it('accountService.add', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    // create an account for test
    const userId = await a.beans.idgen.nextId();
    const accountId = await accountService.createAccount({
        userId: userId,
        currency: testCurrency
    });

    // add 1
    const tradeOrderId = await a.beans.idgen.nextId();
    const bizKey = 'testBiz';
    const amount = 123;

    await a.beans.tx.withinTx(async (tx) => {
        await accountService.add({
            accountId: accountId,
            tradeOrderId: tradeOrderId,
            bizKey: bizKey,
            amount: amount,
            tx
        });
    });

    // add 2
    const tradeOrderId2 = await a.beans.idgen.nextId();
    const bizKey2 = 'testBiz';
    const amount2 = 123;
    await a.beans.tx.withinTx(async (tx) => {
        await accountService.add({
            accountId: accountId,
            tradeOrderId: tradeOrderId2,
            bizKey: bizKey2,
            amount: amount2,
            tx
        });
    });

    const account = await accountService.getAccount({
        id: accountId
    });

    console.log("account", account);

    assert.equal(account.balance, amount + amount2);
});


it('accountService.freeze', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    // create an account for test
    const userId = await a.beans.idgen.nextId();
    const accountId = await accountService.createAccount({
        userId: userId,
        currency: testCurrency
    });

    // add
    const tradeOrderId = await a.beans.idgen.nextId();
    const bizKey = 'testBiz';
    const amount = 123;

    await a.beans.tx.withinTx(async (tx) => {
        await accountService.add({
            accountId: accountId,
            tradeOrderId: tradeOrderId,
            bizKey: bizKey,
            amount: amount,
            tx
        });
    });

    const account = await accountService.getAccount({
        id: accountId
    });
    console.log("account", account);
    assert.equal(account.balance, amount);

    // freeze
    const freezeAmount = 100;
    const tradeOrderId2 = await a.beans.idgen.nextId();
    await a.beans.tx.withinTx(async (tx) => {
        await accountService.freeze({
            accountId: accountId,
            tradeOrderId: tradeOrderId2,
            bizKey: bizKey,
            amount: freezeAmount,
            tx
        });
    });

    const accountUpdated = await accountService.getAccount({
        id: accountId
    });
    console.log("accountUpdated", accountUpdated);
    assert.equal(accountUpdated.balance, amount);
    assert.equal(accountUpdated.freezeBalance, freezeAmount);


    // unfreeze
    const unfreezeAmount = 25;
    const tradeOrderId3 = await a.beans.idgen.nextId();
    await a.beans.tx.withinTx(async (tx) => {
        await accountService.unfreeze({
            accountId: accountId,
            tradeOrderId: tradeOrderId3,
            bizKey: bizKey,
            amount: unfreezeAmount,
            tx
        });
    });

    const accountUpdated2 = await accountService.getAccount({
        id: accountId
    });
    console.log("accountUpdated2", accountUpdated2);
    assert.equal(accountUpdated2.balance, amount);
    assert.equal(accountUpdated2.freezeBalance, freezeAmount - unfreezeAmount);

});


it('accountService.batch', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    // create an account for test
    const platformReceivingUserId = await a.beans.idgen.nextId();
    const platformProfitUserId = await a.beans.idgen.nextId();
    const sellerUserId = await a.beans.idgen.nextId();
    const userId = await a.beans.idgen.nextId();

    const platformReceivingAccountId = await accountService.createAccount({
        userId: platformReceivingUserId,
        currency: testCurrency
    });

    const sellerAccountId = await accountService.createAccount({
        userId: sellerUserId,
        currency: testCurrency
    });


    const platformProfitAccountId = await accountService.createAccount({
        userId: platformProfitUserId,
        currency: testCurrency
    });

    const paymentAmount = 1000;
    const platformProfit = 100;
    const sellerProfit = 900;


    // add
    const tradeOrderId = await a.beans.idgen.nextId();
    const bizKey = 'testBiz';

    await a.beans.tx.withinTx(async (tx) => {
        await accountService.batch({

            tradeOrderId: tradeOrderId,
            bizKey: bizKey,
            options: [

                // 平台入账
                {
                    accountId: platformReceivingAccountId,
                    amount: paymentAmount,
                    opt: 'add',
                },


                // 分润并冻结到 平台收益账户
                {
                    accountId: platformReceivingAccountId,
                    amount: platformProfit,
                    opt: 'reduce',
                },
                {
                    accountId: platformProfitAccountId,
                    amount: platformProfit,
                    opt: 'add',
                },
                {
                    accountId: platformProfitAccountId,
                    amount: platformProfit,
                    opt: 'freeze',
                },

                // 分润并冻结到 卖家账户
                {
                    accountId: platformReceivingAccountId,
                    amount: sellerProfit,
                    opt: 'reduce',
                },
                {
                    accountId: sellerAccountId,
                    amount: sellerProfit,
                    opt: 'add',
                },
                {
                    accountId: sellerAccountId,
                    amount: sellerProfit,
                    opt: 'freeze',
                },
            ],
            tx
        });
    });

    const platformAccount = await accountService.getAccount({id: platformReceivingAccountId});
    const sellerAccount = await accountService.getAccount({id: sellerAccountId});
    const platformProfitAccount = await accountService.getAccount({id: platformProfitAccountId});

    console.log('platformAccount', platformAccount);
    console.log('sellerAccount', sellerAccount);
    console.log('platformProfitAccount', platformProfitAccount);

});


it('accountService.reduce.balance_insufficient', async () => {

    const a = await loadContext();
    const accountService = a.beans.accountService;

    const newUserId = await a.beans.idgen.nextId();
    const accountId = await accountService.createAccount({
        userId: newUserId,
        currency: testCurrency
    });
    console.log(accountId);

    const tradeOrderId = await a.beans.idgen.nextId();
    const bizKey = 'testBiz';
    const amount = 123;

    try {
        await a.beans.tx.withinTx(async (tx) => {
            await accountService.reduce({
                accountId: accountId,
                tradeOrderId: tradeOrderId,
                bizKey: bizKey,
                amount: amount,
                tx
            });
        });
    } catch (e) {
        if (e instanceof a.models.BizError) {
            console.log(e);
            assert.equal(e.code, a.models.CommonBizCodeMessages.balance_insufficient.code);
        }
    }

});
