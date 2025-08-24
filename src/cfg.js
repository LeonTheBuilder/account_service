const path = require("path");
const cfgdef = require('aframework/cfgdef');
const commonCfgSet = require('./cfgset');
const cfg = cfgdef();
//----------------------------------------------------------------
cfg.app.rootFolder = path.join(__dirname, '..');
cfg.autowire.folders = [
    __dirname,
];
//----------------------------------------------------------------
cfg.web.view.viewFolder = require('./web/views/viewfolder');
cfg.mysql.database = 'account_service';
//----------------------------------------------------------------
commonCfgSet(cfg);
//----------------------------------------------------------------
module.exports = cfg;
