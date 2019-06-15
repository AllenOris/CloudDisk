const db = require('../database/db');

const sessionBuild = async (req, res, next) => {
    'use strict';
    // console.log("Session Build");
    if ((req.session !== undefined && req.session.userID !== undefined)) {
        next();
    } else if (req.body.name === undefined || req.body.password === undefined) {
        next();
    } else {
        // 数据库最大连接数，pool
        const query = "SELECT * FROM User WHERE name=? AND password=? LIMIT 1";
        const params = [req.body.name, req.body.password];
        const results = await db.query(query, params);
        if (results.length > 0) {
            //console.log(results[0]);
            req.session.name = req.body.name;
            req.session.password = req.body.password;
            req.session.permission = results[0].permission;
            req.session.userID = results[0].userID;
            req.body.userID = results[0].userID;
            //console.log(req.session);
        }
        next();
    }
};

module.exports = sessionBuild;