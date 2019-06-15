const router = require('express').Router();
const info = require('./user_info');
const upload = require('./user_upload');
const download = require('./user_download');
const check = require('./user_check');
const Delete = require('./user_delete');

router.use(check);

router.use(info);
router.use(upload);
router.use(download);
router.use(Delete);

module.exports = router;