const mysql = require('mysql');
const conn = {
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: '',
    database: 'sally'
};

const db = mysql.createPool({
    host: 'localhost',
    user: 'test',
    password: '1111',
    database: 'sally'
});

module.exports = db;

