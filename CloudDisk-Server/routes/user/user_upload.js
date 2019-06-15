const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const conf = require('../../config/conf_path');
const db = require('../../database/db');
require('express-async-errors');
const fs = require("fs"); //Load the filesystem module

router.post('/upload', async (req, res) => {
    // console.log(req.body.file);
    if (req.body.file === undefined) return res.fail(1);
    if (req.session.userID === undefined || req.body.fileName === undefined) {
        res.fatal(400, "params lack");
        return;
    }
    const stats = fs.statSync(req.body.file.path);
    const fileSize = stats.size;
    //console.log(fileSize);
    const query = 'INSERT INTO File (userID,uploadTime,name,size,path,count,valid) VALUES (?,now(),?,?,?,?,?)';
    const params = [req.session.userID, req.body.fileName, fileSize, req.body.file.path.replace(conf.FILE_PATH, ''), 0, req.session.permission];
    const results = await db.query(query, params);
    res.ok();
});

module.exports = router;
