const express = require('express');
const pool = require('../config.js')


router = express.Router();

// edit profile
router.put("/user/edit/:userId", async function  (req, res, next) {
    const {u_fname, u_lname, u_user_name} = req.body
   console.log(u_fname, u_lname, u_user_name, req.params.userId);
        try {
            const [rows1, fields1] = await pool.query('select u_user_name from user where u_user_name = ?',
            [u_user_name])
            // console.log(rows1.length);
            if(rows1.length == 0){
                
                const [rows, fields] = await pool.query('UPDATE user SET u_fname=?, u_lname=?, u_user_name=? where u_id = ?',
                [u_fname, u_lname, u_user_name, req.params.userId])

                const [rows1, fields1] = await pool.query('select * from user where u_id=?',
                [req.params.userId])
                return res.json(rows1[0])
            }
            else{
                return res.json({message: "Username use pai laew", status:'error'})
            }
        } catch (err) {
            console.log(err);
            next(err)
            
        }
    
});

exports.router = router;