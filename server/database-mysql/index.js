var mysql = require('mysql2');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : ' CineCast'
});
db.connect(() => {
  console.log("Database Connected ");
});
module.exports = db;