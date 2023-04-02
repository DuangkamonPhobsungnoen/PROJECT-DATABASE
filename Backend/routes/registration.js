const express = require('express');
const pool = require('../config.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
router = express.Router();


// router.get("/register", async function (req, res, next) {
//     try {
//         const {u_fname, u_lname, u_user_name} = req.body

//         const [rows, fields] = await pool.query('insert into user(u_fname, u_lname, u_user_name, u_bio) values (?,?,?,?) ',
//         [u_fname, u_lname, u_user_name, u_pass]);
//         return res.json(rows)
        
//     } catch (error) {
//         next(err)
//     }
    
//   });

  router.post("/register", async function  (req, res, next) {
    const {u_fname, u_lname, u_user_name, u_pass} = req.body
    bcrypt.hash(u_pass, saltRounds, async function(err, hash){
        try {
            console.log(hash);
            console.log(u_pass);
            const [rows1, fields] = await pool.query('select u_user_name from user where u_user_name = ?',
            [u_user_name])
            console.log(rows1.length);
            if(rows1.length == 0){
                const [rows, fields1] = await pool.query('INSERT INTO user(u_fname,u_lname,u_user_name,u_password) VALUES(?,?,?,?)',
                [u_fname, u_lname, u_user_name, hash])
                return res.json(rows)
            }
            else{
                return res.json({status: "Username use pai laew"})
            }
        } catch (err) {
            console.log(err);
            next(err)
            
        }
    })
});

  



  

exports.router = router;