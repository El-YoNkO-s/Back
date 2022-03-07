const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',

  password : 'root',

  database : 'CineCast'
});
db.connect(function (err) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log("Database Connected ");
});
module.exports = db;