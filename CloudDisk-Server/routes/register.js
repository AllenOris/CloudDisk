const router = require('express').Router();
const db = require('../database/db');
require('express-async-errors');

router.post('/register', async (req, res) => {
    //console.log(req.body);
    if (req.body.name === undefined || req.body.password === undefined) {
        res.fatal(400, "params lack");
        return;
    }
    let query = "select * from User where name=?";
    let params = [req.body.name];
    let results = await db.query(query, params);
    if (results.length > 0) {
        res.fatal(501, "user name existed");
        return;
    }
    query = "insert into User (name,password,permission) VALUES (?,?,?)";
    params = [req.body.name, req.body.password, 0];
    results = await db.query(query, params);
    if (results.rowsAffected === 0) {
        res.fatal(500);
    } else {
        res.ok();
    }
});


module.exports = router;