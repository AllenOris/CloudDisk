const router = require('express').Router();
const db = require('../../database/db');
const usrFetch = require('../../lib/user_fetch');
require('express-async-errors');

router.post('/info', async (req, res) => {
    'use strict';
    //console.log(req.body);
    const query = "select * from File where File.userID=?";
    const params = [req.session.userID];
    const results = await db.query(query, params);
    res.ok(results);
});

router.post('/permission', async (req, res) => {
    'use strict';
    const query = "select permission from User where User.userID=?";
    const params = [req.session.userID];
    const results = await db.query(query, params);
    //console.log(results[0]);
    if (results.length > 0) {
        res.ok(results[0]);
    } else {
        res.fatal(401, "no such user");
    }
});

module.exports = router;