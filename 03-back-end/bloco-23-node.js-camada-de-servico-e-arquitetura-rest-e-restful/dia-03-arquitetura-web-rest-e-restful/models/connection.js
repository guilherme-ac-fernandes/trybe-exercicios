const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1212',
  database: 'rest_exercicios',
});

module.exports = connection;
