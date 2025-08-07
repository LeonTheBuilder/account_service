export class SharedServices {
    
        accountService: AccountService;
    
        llmAudioService: LlmAudioService;
    
        llmImageService: LlmImageService;
    
        bailianLlmImageClient: BailianLlmImageClient;
    
        bailianLlmTextClient: BailianLlmTextClient;
    
        volcengineLlmTextClient: VolcengineLlmTextClient;
    
        llmRequestLogService: LlmRequestLogService;
    
        llmTextService: LlmTextService;
    
        llmVideoService: LlmVideoService;
    
        mailService: MailService;
    
        aliyunSmsService: AliyunSmsService;
    
        smsService: SmsService;
    
        manualPaymentService: ManualPaymentService;
    
        paymentService: PaymentService;
    
        solPaymentService: SolPaymentService;
    
        buyProductService: BuyProductService;
    
        tradeService: TradeService;
    
        roleService: RoleService;
    
        userProductService: UserProductService;
    
        userService: UserService;
    
        userServiceWeb3Trait: UserServiceWeb3Trait;
    
        solanaClient: SolanaClient;
    
        solanaService: SolanaService;
    
        ah: Ah;
    
        apiTester: ApiTester;
    
        appqreq: Appqreq;
    
        command: Command;
    
        dlock: Dlock;
    
        downloader: Downloader;
    
        http: Http;
    
        idgen: Idgen;
    
        jwt: Jwt;
    
        mq: Mq;
    
        pubsub: Pubsub;
    
        rate: Rate;
    
        tempData: TempData;
    
        tx: Tx;
    
        web: Web;
    
        Sequelize: Sequelize;
    
        DataTypes: DataTypes;
    
        path: path;
    
        Account: Account;
    
        Accounting: Accounting;
    
        AccountRecord: AccountRecord;
    
        AccountOpts: AccountOpts;
    
        Currency: Currency;
    
        ModelTypes: ModelTypes;
    
        ModelRequestLog: ModelRequestLog;
    
        CommonBizCodeMessages: CommonBizCodeMessages;
    
        Sms: Sms;
    
        ManualPaymentDetail: ManualPaymentDetail;
    
        PaymentTypes: PaymentTypes;
    
        PaymentOrder: PaymentOrder;
    
        SolPaymentDetail: SolPaymentDetail;
    
        SolPaymentSingleUseReceivingAddress: SolPaymentSingleUseReceivingAddress;
    
        BuyProductOrder: BuyProductOrder;
    
        TradeOrder: TradeOrder;
    
        UserRole: UserRole;
    
        User: User;
    
        UserPasswordHint: UserPasswordHint;
    
        UserEndpoint: UserEndpoint;
    
        UserProduct: UserProduct;
    
        CommonCodeMessages: CommonCodeMessages;
    
        Sugar: Sugar;
    
        BizError: BizError;
    
        SifStatus: SifStatus;
    
}


export declare class AccountService
    
               extends SharedServices
    
    {
    
        createAccount(args: any) : Promise<any>;
    
        getCreateAccount(args: any) : Promise<any>;
    
        getUserAccountId(args: any) : Promise<any>;
    
        getAccount(args: any) : Promise<any>;
    
        add(args: any) : Promise<any>;
    
        reduce(args: any) : Promise<any>;
    
        freeze(args: any) : Promise<any>;
    
        unfreeze(args: any) : Promise<any>;
    
        transfer(args: any) : Promise<any>;
    
        _createAccounting(args: any) : Promise<any>;
    
        _opt(args: any) : Promise<any>;
    
        _recordOpt(args: any) : Promise<any>;
    
        batch(args: any) : Promise<any>;
    
        listAccountRecords(args: any) : Promise<any>;
    
}

export declare class LlmAudioService
    
               extends SharedServices
    
    {
    
}

export declare class LlmImageService
    
               extends SharedServices
    
    {
    
}

export declare class BailianLlmImageClient
    
               extends SharedServices
    
    {
    
        complete(args: any) : Promise<any>;
    
        chat(args: any) : Promise<any>;
    
        embed(args: any) : Promise<any>;
    
}

export declare class BailianLlmTextClient
    
               extends SharedServices
    
    {
    
        complete(args: any) : Promise<any>;
    
        chat(args: any) : Promise<any>;
    
        embed(args: any) : Promise<any>;
    
        _textComplete(args: any) : Promise<any>;
    
}

export declare class VolcengineLlmTextClient
    
               extends SharedServices
    
    {
    
        complete(args: any) : Promise<any>;
    
        chat(args: any) : Promise<any>;
    
        embed(args: any) : Promise<any>;
    
}

export declare class LlmRequestLogService
    
               extends SharedServices
    
    {
    
        save(args: any) : Promise<any>;
    
}

export declare class LlmTextService
    
               extends SharedServices
    
    {
    
        complete(args: any) : Promise<any>;
    
        chat(args: any) : Promise<any>;
    
        embed(args: any) : Promise<any>;
    
        _getLlModel(args: any) : any; 
    
}

export declare class LlmVideoService
    
               extends SharedServices
    
    {
    
}

export declare class MailService
    
               extends SharedServices
    
    {
    
        sendMail(args: any) : Promise<any>;
    
}

export declare class AliyunSmsService
    
               extends SharedServices
    
    {
    
        sendSms(args: any) : Promise<any>;
    
}

export declare class SmsService
    
               extends SharedServices
    
    {
    
        sendSms(args: any) : Promise<any>;
    
}

export declare class ManualPaymentService
    
               extends SharedServices
    
    {
    
        createOrder(args: any) : Promise<any>;
    
        getOrder(args: any) : Promise<any>;
    
        onPaymentFinalize(args: any) : Promise<any>;
    
}

export declare class PaymentService
    
               extends SharedServices
    
    {
    
        getPaymentService(args: any) : any; 
    
        createOrder(args: any) : Promise<any>;
    
        getOrders(args: any) : Promise<any>;
    
        onPaymentFinalize(args: any) : Promise<any>;
    
}

export declare class SolPaymentService
    
               extends SharedServices
    
    {
    
        createOrder(args: any) : Promise<any>;
    
        getOrder(args: any) : Promise<any>;
    
        generateSolAddress(args: any) : Promise<any>;
    
        onPaymentFinalize(args: any) : Promise<any>;
    
        startWorkerForTxSync(args: any) : Promise<any>;
    
        txSync(args: any) : Promise<any>;
    
        syncSingleSolPayment(args: any) : Promise<any>;
    
}

export declare class BuyProductService
    
               extends SharedServices
    
    {
    
        createOrder(args: any) : Promise<any>;
    
        getOrder(args: any) : Promise<any>;
    
        onPaymentFinalize(args: any) : Promise<any>;
    
}

export declare class TradeService
    
               extends SharedServices
    
    {
    
        getTradeService(args: any) : any; 
    
        createOrder(args: any) : Promise<any>;
    
        getOrder(args: any) : Promise<any>;
    
        listTradeOrders(args: any) : Promise<any>;
    
        onPaymentFinalize(args: any) : Promise<any>;
    
}

export declare class RoleService
    
               extends SharedServices
    
    {
    
        addRoleToUser(args: any) : Promise<any>;
    
        deleteRoleFromUser(args: any) : Promise<any>;
    
        listUserRoles(args: any) : Promise<any>;
    
        doesUserHaveAnyRole(args: any) : Promise<any>;
    
        doesUserHaveAllRoles(args: any) : Promise<any>;
    
}

export declare class UserProductService
    
               extends SharedServices
    
    {
    
        addProduct(args: any) : Promise<any>;
    
        hasProduct(args: any) : Promise<any>;
    
        listUserAvailableProducts(args: any) : Promise<any>;
    
}

export declare class UserService
    
               extends SharedServices
    
    {
    
        register(args: any) : Promise<any>;
    
        login(args: any) : Promise<any>;
    
        getUser(args: any) : Promise<any>;
    
        getCreateUserByEndpoint(args: any) : Promise<any>;
    
        sendLoginCode(args: any) : Promise<any>;
    
        loginByCode(args: any) : Promise<any>;
    
        sendLoginUrl(args: any) : Promise<any>;
    
        loginByUrl(args: any) : Promise<any>;
    
        setJwtAndRedirect(args: any) : Promise<any>;
    
        updateUserPasswordHint(args: any) : Promise<any>;
    
        getUserPasswordHint(args: any) : Promise<any>;
    
}

export declare class UserServiceWeb3Trait
    
               extends SharedServices
    
    {
    
        loginByWalletAddress(args: any) : Promise<any>;
    
        isValidSignature(args: any) : Promise<any>;
    
        _base64ToUint8Array(args: any) : Promise<any>;
    
}

export declare class SolanaClient
    
               extends SharedServices
    
    {
    
        sol2lamports(args: any) : any; 
    
        lamports2sol(args: any) : any; 
    
        getConnection(args: any) : Promise<any>;
    
        getLastBlockHeight(args: any) : Promise<any>;
    
        getBalance(args: any) : Promise<any>;
    
        sign(args: any) : any; 
    
        partialSign(args: any) : any; 
    
        signAndSubmitTx(args: any) : Promise<any>;
    
        buildVersionedTx(args: any) : Promise<any>;
    
        getTokenAccountBalance(args: any) : Promise<any>;
    
        getTokenAccountsByAddress(args: any) : Promise<any>;
    
        buildTransferTx4Sol(args: any) : Promise<any>;
    
        transfer4Sol(args: any) : Promise<any>;
    
        buildTransferTx4Token(args: any) : Promise<any>;
    
        transferTx4Token(args: any) : Promise<any>;
    
        getSolInputRecordByAddress(args: any) : Promise<any>;
    
        buildCloseAccountTx(args: any) : Promise<any>;
    
        closeAccount(args: any) : Promise<any>;
    
        getTxStatus(args: any) : Promise<any>;
    
        getTransactionDetail(args: any) : Promise<any>;
    
}

export declare class SolanaService
    
               extends SharedServices
    
    {
    
        queryTxAccountSolChanges(args: any) : Promise<any>;
    
}

export declare class Ah
    
               extends SharedServices
    
    {
    
        ctx2args(args: any) : Promise<any>;
    
}

export declare class ApiTester
    
               extends SharedServices
    
    {
    
        get(args: any) : Promise<any>;
    
        post(args: any) : Promise<any>;
    
        call(args: any) : Promise<any>;
    
}

export declare class Appqreq
    
               extends SharedServices
    
    {
    
        listen(args: any) : Promise<any>;
    
        appQname(args: any) : any; 
    
        dispatchRequest(args: any) : Promise<any>;
    
        send(args: any) : Promise<any>;
    
}

export declare class Command
    
               extends SharedServices
    
    {
    
        exec(args: any) : any; 
    
}

export declare class Dlock
    
               extends SharedServices
    
    {
    
        tryLock(args: any) : Promise<any>;
    
}

export declare class Downloader
    
               extends SharedServices
    
    {
    
        download(args: any) : Promise<any>;
    
}

export declare class Http
    
               extends SharedServices
    
    {
    
        call(args: any) : Promise<any>;
    
        post(args: any) : Promise<any>;
    
        get(args: any) : Promise<any>;
    
}

export declare class Idgen
    
               extends SharedServices
    
    {
    
        nextId(args: any) : Promise<any>;
    
        nextInt(args: any) : Promise<any>;
    
        nextURI(args: any) : Promise<any>;
    
        date2id(args: any) : Promise<any>;
    
        generateIdTimeBase(args: any) : Promise<any>;
    
}

export declare class Jwt
    
               extends SharedServices
    
    {
    
        getSecret(args: any) : any; 
    
        issue(args: any) : Promise<any>;
    
        decode(args: any) : Promise<any>;
    
        issueTokenByUid(args: any) : Promise<any>;
    
        setUidJwt(args: any) : Promise<any>;
    
        curUidEx(args: any) : Promise<any>;
    
        curUid(args: any) : Promise<any>;
    
        _getCtxToken(args: any) : any; 
    
}

export declare class Mq
    
               extends SharedServices
    
    {
    
        send(args: any) : Promise<any>;
    
        pop(args: any) : Promise<any>;
    
        popblock(args: any) : Promise<any>;
    
}

export declare class Pubsub
    
               extends SharedServices
    
    {
    
        pub(args: any) : any; 
    
        sub(args: any) : Promise<any>;
    
}

export declare class Rate
    
               extends SharedServices
    
    {
    
        limit(args: any) : Promise<any>;
    
}

export declare class TempData
    
               extends SharedServices
    
    {
    
        set(args: any) : Promise<any>;
    
        get(args: any) : Promise<any>;
    
        incr(args: any) : Promise<any>;
    
        exists(args: any) : Promise<any>;
    
        del(args: any) : Promise<any>;
    
        rent(args: any) : Promise<any>;
    
}

export declare class Tx
    
               extends SharedServices
    
    {
    
        begin(args: any) : Promise<any>;
    
        within(args: any) : Promise<any>;
    
        withinTx(args: any) : Promise<any>;
    
}

export declare class Web
    
               extends SharedServices
    
    {
    
        getMappings(args: any) : any; 
    
        init(args: any) : Promise<any>;
    
        start(args: any) : Promise<any>;
    
}

export declare class path
    
    {
    
        static resolve(args: any) : any; 
    
        static normalize(args: any) : any; 
    
        static isAbsolute(args: any) : any; 
    
        static join(args: any) : any; 
    
        static relative(args: any) : any; 
    
        static toNamespacedPath(args: any) : any; 
    
        static dirname(args: any) : any; 
    
        static basename(args: any) : any; 
    
        static extname(args: any) : any; 
    
        static format(args: any) : any; 
    
        static parse(args: any) : any; 
    
        static matchesGlob(args: any) : any; 
    
        static _makeLong(args: any) : any; 
    
}

export declare class Account
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class Accounting
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class AccountRecord
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class AccountOpts
    
    {
    
}

export declare class Currency
    
    {
    
}

export declare class ModelTypes
    
    {
    
}

export declare class ModelRequestLog
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class CommonBizCodeMessages
    
    {
    
}

export declare class Sms
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class ManualPaymentDetail
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class PaymentTypes
    
    {
    
}

export declare class PaymentOrder
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class SolPaymentDetail
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class SolPaymentSingleUseReceivingAddress
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class BuyProductOrder
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class TradeOrder
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class UserRole
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class User
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class UserPasswordHint
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class UserEndpoint
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class UserProduct
    
    {
    
        static _isPrimaryKey(args: any) : any; 
    
}

export declare class CommonCodeMessages
    
    {
    
}

export declare class Sugar
    
    {
    
        static trys(args: any) : Promise<any>;
    
        static extractJson(args: any) : any; 
    
        static extractInstance(args: any) : any; 
    
        static json2str(args: any) : any; 
    
        static str2json(args: any) : any; 
    
        static json2instance(args: any) : any; 
    
        static instance2json(args: any) : any; 
    
        static instance2jsonStr(args: any) : any; 
    
        static jsonStr2instance(args: any) : any; 
    
        static getInstanceMethods(args: any) : any; 
    
        static ensureFolder(args: any) : Promise<any>;
    
        static readFileContent(args: any) : any; 
    
        static writeFile(args: any) : any; 
    
        static moveFile(args: any) : Promise<any>;
    
        static copyFile(args: any) : Promise<any>;
    
        static render(args: any) : any; 
    
        static renderFile(args: any) : Promise<any>;
    
        static getFileExtByUrl(args: any) : any; 
    
        static scanFiles(args: any) : any; 
    
        static listSubDirs(args: any) : Promise<any>;
    
        static deleteFolder(args: any) : Promise<any>;
    
        static curDate2String(args: any) : any; 
    
        static sleep(args: any) : any; 
    
        static sleepRandom(args: any) : any; 
    
        static passwordToHash(args: any) : any; 
    
        static randomArrayItem(args: any) : any; 
    
        static randomDigits(args: any) : any; 
    
}

export declare class BizError
    
    {
    
        static error(args: any) : any; 
    
        static accident(args: any) : any; 
    
        static accidentIf(args: any) : any; 
    
        static accidentIfAnyNone(args: any) : any; 
    
        static paramsErrorIfAnyNone(args: any) : any; 
    
        static err(args: any) : any; 
    
        static errIf(args: any) : any; 
    
        static retryIf(args: any) : any; 
    
        static noAuthErrIf(args: any) : any; 
    
        static noDataErrIf(args: any) : any; 
    
        static notSupportedErrIf(args: any) : any; 
    
}

export declare class SifStatus
    
    {
    
}



