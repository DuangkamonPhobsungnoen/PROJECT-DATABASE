const express = require('express');
const pool = require('../config.js')
const path = require("path")

router = express.Router();


// Require multer for file upload
const multer = require('multer')
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })

// edit profile
router.put("/user/edit/:userId", upload.single('u_picture'), async function  (req, res, next) {
   
        try {
            const {fname, lname, username} = req.body
            const file = req.file;
            console.log(fname, lname, username, req.params.userId, file.path.substr(6));
            // if (!file) {
            
            // }


            const [rows1, fields1] = await pool.query('select u_user_name from user where u_user_name = ? and u_id != ?',
            [username, req.params.userId])
            // console.log(rows1);
            if(rows1.length == 0){
                
                const [rows, fields] = await pool.query('UPDATE user SET u_fname=?, u_lname=?, u_user_name=? where u_id = ?',
                [fname, lname, username, req.params.userId])

                const [rows2, fields2] = await pool.query('update user set u_pic = ? where u_id = ?',
                [file.path.substr(6),req.params.userId])

                const [rows1, fields1] = await pool.query('select u_pic from user where u_id=?',
                [req.params.userId])

                const [rows3, fields3] = await pool.query('select u_fname, u_lname, u_user_name from user where u_id=?',
                [req.params.userId])

                

                return res.json(
                    {
                        pic:rows1[0].u_pic,
                        fname: rows3[0].u_fname,
                        lname: rows3[0].u_lname,
                        u_user_name: rows3[0].u_user_name

                    })
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