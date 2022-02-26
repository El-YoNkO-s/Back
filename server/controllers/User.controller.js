var db = require("../database-mysql")
const bcrypt = require("bcrypt");
const signUp = async function (req, res) {
    var salt = await bcrypt.genSalt();
    var pass = await bcrypt.hash(req.body.password, salt);
    var insertsql = "INSERT INTO User SET ?";
    var params = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        categorie: req.body.categorie,
        password: pass,
        phone_number: req.body.phone_number,

    }
    db.query(insertsql, params, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}







module.exports = { signUp };