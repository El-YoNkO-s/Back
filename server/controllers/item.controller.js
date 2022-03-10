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
var insertcommit = (req, res) => {
  var params = {id_Post:req.body.id_Post,des:req.body.des}
  var getcommit ="Insert INTO comments SET ?";
  db.query(getcommit,params,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
var getpostcomment = (req, res) => {
  var postUSER = "SELECT Posts.*, comments.des FROM Posts INNER JOIN comments ON Posts.id_Post = comments.id_Post "
  db.query(postUSER,(err, results) => {
      if(err){
          res.send(err)
      }else{
          res.send(results)
      }
  })
}

module.exports = { commits,getcommit,getpostcomment,insertcommit};
