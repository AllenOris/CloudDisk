const router = require('express').Router();
const user_check = require('../user/user_check');
const admin_check = require('./admin_check');
const admin_examine = require('./admin_examine');
const admin_test=require('./admin_test');

router.use(user_check);
router.use(admin_check);
router.use(admin_examine);
router.use(admin_test);

module.exports = router;