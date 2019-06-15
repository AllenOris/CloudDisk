const createError = require('http-errors');
const express = require('express');
const path = require('path');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./database/db');
const api = require('./routes/api');
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const conf = require('./config/conf_path');
const app = express();

// 跨域请求
app.use(cors({
    // "origin": "http://localhost:8081",
    "origin": true,
    "credentials": true,
    "Access-Control-Allow-Credentials": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}));
// 全路由匹配
app.all('/*', (req, res, next) => {
    let origin = req.headers.origin || req.headers.referer;
    console.log("ip:", req.ip, "path:", req.path, "body:", req.body, "parmas:", req.params, "query:", req.query, "origin:", origin);
    //res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');  //允许客户端携带跨域cookie，此时origin值不能为“*”，只能为指定单一域名
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

//form-data
const options = {
    uploadDir: conf.FILE_PATH,
    autoClean: false
};
// parse data with connect-multiparty.
app.use(formData.parse(options));
// clear from the request and delete all empty files (size == 0)
app.use(formData.format());
// change file objects to stream.Readable
app.use(formData.stream());
// union body and files
app.use(formData.union());

app.use('/api', api);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    if (err.sqlMessage) {
        res.fatal(520, err.sqlMessage);
        res.end();
    } else {
        res.status(err.status || 500);
        res.render('error');
    }
});

module.exports = app;
