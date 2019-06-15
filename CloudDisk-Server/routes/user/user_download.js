const router = require('express').Router();
const conf = require('../../config/conf_path');
const db = require('../../database/db');
require('express-async-errors');

router.post('/download', async (req, res) => {
    if (req.body.fileID === undefined) {
        res.fatal(410, "params lack");
        return;
    }

    let query = "set @path='';" +
        "call download(?, ?, @path);" +
        "select @path as path;";

    let params = [req.session.userID * 1, req.body.fileID * 1];
    let results = await db.query(query, params);
    if (results.length > 2 && results[2][0].path && results[2][0].path !== '') {
        res.sendFile(conf.FILE_PATH + results[2][0].path);
    } else {
        res.fatal(400);
    }
});

router.post('/download/info', async (req, res) => {
    let query = "select Download.time as downloadTime,Download.fileID as fileID,name,size,path,valid,count  from Download,File where Download.userID=? and File.fileID=Download.fileID";
    let params = [req.session.userID];
    let results = await db.query(query, params);
    res.ok(results);
});
module.exports = router;