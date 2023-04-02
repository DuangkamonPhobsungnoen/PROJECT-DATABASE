const express = require('express');
const pool = require('../config.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
router = express.Router();


  router.post("/register", async function  (req, res, next) {
    const {u_fname, u_lname, u_user_name, u_pass} = req.body
    bcrypt.hash(u_pass, saltRounds, async function(err, hash){
        try {
            console.log(hash);
            console.log(u_pass);
            const [rows1, fields1] = await pool.query('select u_user_name from user where u_user_name = ?',
            [u_user_name])
            // console.log(rows1.length);
            if(rows1.length == 0){
                
                const [rows, fields] = await pool.query('INSERT INTO user(u_fname,u_lname,u_user_name,u_password) VALUES(?,?,?,?)',
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


router.post('/login', async (req,res,next) =>{
    const {username, password} = req.body
    try {
        const [rows, fields] = await pool.query('SELECT * FROM user WHERE u_user_name = ?',
        [username])
        if(rows.length == 0){
            return res.json({status: "error", message: "user not found"})
    
        }else {
            bcrypt.compare(password, rows[0].u_password, function(err,isLogin){
                if(isLogin){
                    res.json({status:'ok', user: rows[0]})
                }
                else{
                    res.json({status: 'Invalid Password', err: err})
                }
            })
        }  
    } catch (error) {
        console.log(error);
        next(error)
    }

    
})
  


exports.router = router;