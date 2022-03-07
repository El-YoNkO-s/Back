// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');





var commits = (req, res) => {
  var commsql = "INSERT INTO comments SET ? ";
  var params = {
    des: req.body.des,
    id_Post: req.body.id_Post
  };
  console.log(params)
  db.query(commsql, [params], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
var getcommit = (req, res) => {
  var params = req.params.id_Post
  var getcommit ="SELECT * FROM comments WHERE id_Post = ?";
  db.query(getcommit,params,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { commits,getcommit};
