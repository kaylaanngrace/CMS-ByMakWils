const mysql = require('mysql2');

const db = mysql.createConnection({
  host:'localhost',
  // Your MySQL username,
  user:'root',
  // Your MySQL password
  password:'password',
  database:'CMS_db'
});

module.exports = db;