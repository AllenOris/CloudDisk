const md5 = require('./md5');

const hashPassword = (req, res, next) => {
    'use strict';
    if (req.body.password !== undefined) {
        //console.log(req.body.password);
        req.body.password = md5(req.body.password);
    }
    next();
};

module.exports = hashPassword;