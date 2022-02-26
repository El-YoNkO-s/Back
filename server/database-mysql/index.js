const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ih3b2000A',
  database : 'CineCast'
});
db.connect(function (err) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log("Database Connected ");
});
module.exports = db;