const router = require('_express@4.16.4@express').Router();
const db = require('../database/db');
const conf = require('../config/conf_request');
require('express-async-errors');

router.post('/recent', async (req, res) => {
    const num = req.body.fileNum;
    if (num === undefined) {
        res.fatal(410, "params lack");
        res.end();
    } else if (num > conf.MAX_REQUEST_FILE_NUMBER) {
        res.fatal(411, "too much file request");
        res.end();
    } else {
        const query = "SELECT uploadTime,count,size,File.name as fileName,User.name as userName,User.userID,File.path,File.valid,File.fileID FROM File,User where File.userID=User.userID and User.name!='trash' order by File.uploadTime DESC LIMIT ?";
        const params = [num * 1];
        const results = await db.query(query, params);
        res.ok(results);
    }
});

module.exports = router;