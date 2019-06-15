// create index，download，buy，
const router = require('express').Router();
const session = require('express-session');
const prototype = require('../lib/prototype');
const admin = require('./admin/admin');
const user = require('./user/user');
const register = require('./register');
const login = require('./login');
const recent = require('./recent');
const pwdHash = require('../lib/pwd_hash');
const sessionMake = require('../lib/session_build');
require('express-async-errors');

// response状态码中间件
router.use(prototype.setResponsePrototype);

// session中间件
router.use(session({
    secret: 'Brighten the Day!',    // session签名
    name: 'sessionId',  // 保存在本地的名称
    resave: false,
    saveUninitialized: true,    // 未初始化强制存储
    cookie: {
        maxAge: 1000 * 60 * 60 * 1, // SESSION有效时间
        secure: false   // true: https only
    }
}));

// 密码加密中间件
router.use(pwdHash);

// 注册
router.use(register);

// session
router.use(sessionMake);

// 路由
router.use('/admin', admin);
router.use('/user', user);
router.use(login);
router.use(recent);

router.post('/666', (req, res, next) => {
    res.ok("404 actually");
});

module.exports = router;

