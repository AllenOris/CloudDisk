const mysql = require('mysql');
const config = require('../config/conf_mysql');
const pool = mysql.createPool(config);

const db = {};
db.pool = () => pool;

db.query = (text, params) => {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        'use strict';
        pool.getConnection((err, connection) => {
            const query = mysql.format(text, params);
            connection.query(query, (err, res) => {
                const end = Date.now() - start;
                if (err) {
                    console.log(`Database query [${query}] failed in ${end} ms`);
                    console.log(err);
                    // callback(null, JSON.parse(JSON.stringify(err)));
                    reject(err);
                } else {
                    console.log(`Database query [${query}] finished in ${end} ms`);
                    resolve(res);
                }
            });
            connection.release();
        })
    })
};

console.log('--database connect--');

module.exports = db;