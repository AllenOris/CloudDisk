const db = require('../database/db');
const userFetch = async (usrName) => {
    const query = "SELECT * FROM rs_en_user WHERE wechatId=? LIMIT 1";
    const params = [usrName];
    const results = await db.query(query, params);
    return results;
};

module.exports = userFetch;