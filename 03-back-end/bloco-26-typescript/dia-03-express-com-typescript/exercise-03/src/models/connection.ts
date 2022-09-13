import mysql from 'mysql2/promise';

import 'dotenv/config';

export default mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // Referência: https://stackoverflow.com/questions/32100434/mysql-returns-full-datetime-string-on-select-query-when-column-type-is-date
  dateStrings: true,
});
