const check = (req, res, next) => {
    'use strict';
    if (req.session.userID === undefined) {
        res.sessionFail(401);
    } else {
        next();
    }
};

module.exports = check;