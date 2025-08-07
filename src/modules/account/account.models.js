const a = require('aframework');
const db = a.db;
const DataTypes = a.models.DataTypes;
const Account = db.define(
    'Account',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: 0,
        },
        balance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        freezeBalance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['userId', 'currency'],
                name: 'udx_user_currency',
            },
        ],
    },
);


const Accounting = db.define('Accounting',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        tradeOrderId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        bizKey: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
    },
    {
        charset: 'utf8mb4',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                unique: true,
                fields: ['tradeOrderId', 'bizKey'],
            }
        ]
    },
);


const AccountRecord = db.define(
    'AccountRecord',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        accountId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        accountingId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        amount: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        preBalance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        postBalance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        preFreezeBalance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        postFreezeBalance: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        opt: {
            // add\reduce\freeze\unfree
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'add',
        },

    },
    {
        indexes: [
            {
                fields: ['accountId'],
                name: 'idx_accountId',
            },
        ],
    },
);

const AccountOpts = Object.freeze({
    add: 'add',
    reduce: 'reduce',
    freeze: 'freeze',
    unfreeze: 'unfreeze',
});

const Currency = Object.freeze({
    cny: 'cny',
    point: 'point',
    spread: 'spread',
    usdt: 'usdt',
});

module.exports = {
    Account,
    Accounting,
    AccountRecord,
    AccountOpts,
    Currency,
};
