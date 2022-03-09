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
const getPostid = (req, res) => { // const id=req.params.id
    console.log(req.params.id_User)
        const userInfo = `SELECT * FROM Posts WHERE id_Post = ${req.params[`id_Post`]}`;
        db.query(userInfo, (err, data) => {
            if (err) {
                res.send(err);
                console.log(err)
            } else {
                res.send(data);
            }
        });
    };
    const getUserPost = (req, res) => { // const id=req.params.id
        console.log(req.params.id_User)
            const userPost = `SELECT * FROM Posts WHERE id_User = ${req.params[`id_User`]}`;
            db.query(userPost, (err, data) => {
                if (err) {
                    res.send(err);
                    console.log(err)
                } else {
                    res.send(data);
                }
            });
        };

module.exports = { insertPost,getpost,getPostid,getUserPost };