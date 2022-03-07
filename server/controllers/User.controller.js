var db = require("../database-mysql")
const bcrypt = require("bcrypt");



const register = function (req, res) {
    var sql = 'SELECT * FROM User WHERE LOWER(email) = LOWER(?)'
    console.log(req.body)
    db.query(sql, [req.body.email], (err, result) => {
        if (err) {
            console.log('ok');
            res.status(500).send(err)
        } else {
            if (result.length) {
                res.status(200).send("This user is already in use!");
            } else
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    var params = {
                        username:req.body.username,
                        email:req.body.email,
                        password: hash,
                        phone_number:req.body.phone_number,
                        categorie:req.body.categorie,
                        birthday:req.body.birthday,
                        picture:req.body.picture,

                    }
                    console.log(params)
                    db.query(`INSERT INTO User Set ? `
                        , params, (err, result) => {
                            if (err) {
                                throw err
                            } else {
                                res.status(201).send(result[0])
                            }
                        })
                })
        }

    })
}

const login = (req, res, next) => {
    var params = {
        email:req.body.email,
        password:req.body.password
    }
    sql = 'SELECT * FROM User WHERE email =?'
    db.query(sql,[req.body.email] , (err, result) => { // user does not exists
        if (err) {
            res.send(err);
        } else{
            if (!result.length) {
                res.send("Email or password is incorrect!");
            } else {
                bcrypt.compare(params.password, result[0]["password"], (bErr, bResult) => { // wrong password
                        if (bResult) {
                            res.send(result[0]);
                        } else {
                            res.send("Email or password is incorrect!");
                        }
                })
            }
        }
         
    });
};
const getUserInfo = (req, res) => { // const id=req.params.id
    console.log(req.params.id_User)
        const userInfo = `SELECT * FROM User WHERE id_User = ${req.params[`id_User`]}`;
        db.query(userInfo, (err, data) => {
            if (err) {
                res.send(err);
                console.log(err)
            } else {
                res.send(data);
            }
        });
    };

module.exports={register,login,getUserInfo}
