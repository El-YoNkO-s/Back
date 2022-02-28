var db = require("../database-mysql")
const bcrypt = require("bcrypt");



const register = function (req, res) {
    var sql = 'SELECT * FROM User WHERE LOWER(email) = LOWER(?)'
    console.log(req.body)
    db.query(sql, [req.body.email], (err, result) => {
        if (err) {
            console.log('ena');
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
                        phone_number:req.body.phoneNumber,
                        categorie:req.body.categorie,
                        birthday:req.body.birthday
                    }
                    console.log(params)
                    db.query(`INSERT INTO User Set ? `
                        , params, (err, result) => {
                            if (err) {
                                throw err
                            } else {
                                res.status(201).send("The user has been registerd with us!")
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
                            res.send("Username or password is incorrect!");
                        }
                })
            }
        }
         
    });
};

module.exports={register,login}

