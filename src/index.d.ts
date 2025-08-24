export class SharedServices {
    
        accountService: AccountService;
    
        ah: Ah;
    
        apiTester: ApiTester;
    
        command: Command;
    
        dlock: Dlock;
    
        downloader: Downloader;
    
        http: Http;
    
        idgen: Idgen;
    
        jwt: Jwt;
    
        mq: Mq;
    
        pathFinder: PathFinder;
    
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
    
        CommonBizCodeMessages: CommonBizCodeMessages;
    
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
    
        next(args: any) : Promise<any>;
    
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

export declare class PathFinder
    
               extends SharedServices
    
    {
    
        absPath(args: any) : Promise<any>;
    
        id2RelPath(args: any) : Promise<any>;
    
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

export declare class CommonBizCodeMessages
    
    {
    
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
    
        static readToml(args: any) : any; 
    
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
    
        static date2string(args: any) : any; 
    
        static string2date(args: any) : any; 
    
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



