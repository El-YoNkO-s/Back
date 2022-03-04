var db = require("../database-mysql")
var insertPost = function (req, res) {
    var lecture = "INSERT INTO Posts SET ?"
    var params = {
        post: req.body.post,
        picture: req.body.picture,
        // id_type: req.body.id_type,
        id_User: req.body.id_User
    }
    db.query(lecture, params, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.send(results)
        }
    })
}
var getpost = (req, res) => {
    var post = "SELECT * FROM Posts "
    db.query(post,(err, results) => {
        if(err){
            res.send(err)
        }else{
            res.send(results)
        }
    })
}

module.exports = { insertPost,getpost };