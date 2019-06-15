const router = require('express').Router();
const db = require('../../database/db');
require('express-async-errors');

router.post('/examine', async (req, res) => {
    if (req.body.fileID === undefined || req.body.isPassed === undefined) {
        res.fatal(410, "params lack");
        res.end();
    }
    const query = "UPDATE File set File.valid=? where File.fileID=?";
    const params = [req.body.isPassed * 1, req.body.fileID * 1];
    const results = await db.query(query, params);
    if (results.affectedRows === 0) {
        res.fatal(411, "don't have that file");
        res.end();
    }
    res.ok();
});

router.post('/valid', async (req, res) => {
    const query = "select * from checkView LIMIT 10";
    const params = [];
    const results = await db.query(query, params);
    res.ok(results);
});

module.exports = router;












