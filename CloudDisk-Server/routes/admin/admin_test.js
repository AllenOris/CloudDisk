const router = require('express').Router();
const db = require('../../database/db');
require('express-async-errors');

router.post('/test', async (req, res) => {
    if (req.body.query === undefined) {
        res.fatal(410, "params lack");
        res.end();
    }
    const query = req.body.query;
    const params = [];
    const results = await db.query(query, params);
    res.ok(results);
});

module.exports = router;