const check = (req, res, next) => {
    'use strict';
    if (req.session.permission === undefined || req.session.permission * 1 < 1) {
        res.fatal(401, "need admin");
    } else next();
};

module.exports = check;