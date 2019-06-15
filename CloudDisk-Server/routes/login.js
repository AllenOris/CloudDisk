const router = require('express').Router();
const db = require('../database/db');
const session = require('express-session');
require('express-async-errors');

const loginHandler = async (req, res) => {
    'use strict';
    const query = "SELECT * FROM User WHERE name=? AND password=? LIMIT 1";
    // console.log(req.body);
    const params = [req.body.name, req.body.password];
    const results = await db.query(query, params);
   // console.log(results);
    if (results.length === 0) {
        res.fail(...errArr);
    } else {
        req.session.name = req.body.name;
        req.session.password = req.body.password;
        req.session.userID = results[0].userID;
        req.session.permisson = results[0].permisson;
        res.ok();
        res.end();
    }
};

/**
 * @api {post} /logout 退出登录
 * @apiDescription 退出登录
 * @apiName logout
 * @apiHeader {String} cookie 用户授权cookie
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "cookie": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org"
 *     }
 * @apiGroup user
 * @apiSuccess  code 返回状态码
 * @apiSuccess  message 错误信息
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *  "code":0,
 *  "message":"ok"
 *   }
 * @apiVersion 1.0.0
 */
router.post('/logout', async (req, res) => {
    'use strict';
    req.session.destroy(function (err) {
        if (err) {
            res.fatal(402, 'something wrong with your session');
            return;
        }
        //console.log('logout');
        res.ok();
    });
});

router.post('/refresh', loginHandler);


const errArr = [422, [{name: 'name', message: 'might be wrong'}, {
    name: 'password',
    message: 'might be wrong'
}], 'login failed'];

router.post('/login', loginHandler);


module.exports = router;