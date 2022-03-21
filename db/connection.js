const mysql = require('mysql2');
const prompts = require('../utils/prompt')

const db = mysql.createConnection({
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // MySQL password
  password: 'password',
  database: 'cms_db'
});

db.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to the inventory_db database.`);

    prompts;
});

module.exports = db;