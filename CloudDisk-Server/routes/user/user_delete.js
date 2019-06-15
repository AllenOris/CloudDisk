const router = require('express').Router();
const conf = require('../../config/conf_path');
const db = require('../../database/db');
require('express-async-errors');

router.post('/delete', async (req, res) => {
    if (req.body.fileID === undefined) res.fatal(410, "params lack");
    if (req.session.permission === 0) {
        let query = "select * from File where userID=? and fileID=?";
        let params = [req.session.userID * 1, req.body.fileID * 1];
        let results = await db.query(query, params);
        if (results.length === 0) {
            res.fatal(400, "No authority to operate the file or file doesn't exist");
            return;
        }
    }
    let results = await db.query("select * from User where User.name=?", "trash");
    if (results.length === 0 || results[0].userID === undefined) {
        res.fatal(401, 'no trash ID');
        return;
    }
    let trashID = 1 * results[0].userID;
    //console.log("trashID:" + trashID);
    // 开始事务，删除一个文件
    let query = "start transaction;" +
        "delete Download from Download where fileID=?;" +
        "delete File from File,User where File.fileID=? and File.userID=User.userID and User.permission=0;" +
        "update File set File.userID=? where File.fileID=?;" +
        "commit;";
    let params = [req.body.fileID * 1, req.body.fileID * 1,  trashID * 1, req.body.fileID * 1];


    results = await db.query(query, params);
    let suc = false;
    for (let i = 0; i < results.length; ++i) {
        if (results[i].affectedRows > 0) {
            suc = true;
            break;
        }
    }
    if (suc) {
        res.ok();
    } else {
        res.fatal(401, "file doesn't exist");
    }
});

module.exports = router;