const express = require('express');
const pool = require('../config.js')

router = express.Router();

  router.post("/actor/add", async function (req, res, next) {
    const {fname, lname, gender, movId} = req.body
    // console.log(fname, lname, gender, movId)
    // return res.json({fname, lname, gender, mov_id})

    try {
        const [rows0, fields0] = await pool.query('select * from actor where act_fname = ? and act_lname = ?',
        [fname, lname])
        // const check = rows0.length
        // return res.json({test:rows0[0].act_id})
        if(rows0.length == 0){
            const [rows, fields] = await pool.query('insert into actor(act_fname, act_lname, act_gender) values (?,?,?)',
                [fname, lname, gender])
            var actId = rows.insertId
            // return res.json({message:"ยังไม่มีจ้า"})
        } else{
            var actId = rows0[0].act_id
            // return res.json({message:"มีแล้วจ้า"})
        }

        const [rows1, fields1] = await pool.query('insert into movie_cast(mov_id, act_id) values (?,?)',
        [movId, actId])

        const [rows2, fields2] = await pool.query('select * from actor where act_id = ?',
        [actId])


        return res.json({actAdded:rows2[0]})
    } catch (error) {
        console.log(error);
        next(error)
    }
    
  });


  router.get("/actor", async function (req, res, next) {
    try {  
      const [rows, fields] = await pool.query("SELECT * FROM actor");  
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
  });

  router.get("/actor/:actId", async function (req, res, next) {
    try {  
      const [rows, fields] = await pool.query("SELECT * FROM actor where act_id = ?",
      [req.params.actId]);  
      
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
  });
  
  router.put("/actor/edit/:actId", async function (req, res, next) {
    const {fname, lname, gender} = req.body
    console.log(fname, lname, gender, req.params.actId)
    try {  
      const [rows, fields] = await pool.query("UPDATE actor SET act_fname=?, act_lname=?, act_gender=? where act_id = ?",
      [fname,lname,gender, parseInt(req.params.actId)]);
      
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
  });
// get movie of actor
  router.get("/actor/mov/:actId", async function (req, res, next) {
    console.log(req.params.actId)
    try {  
      const [rows, fields] = await pool.query("SELECT mov_title, mov_rate, mov_pic FROM movie join movie_cast using(mov_id) join actor using(act_id) where act_id = ?",
      [req.params.actId]);
      // console.log(rows);
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
  });
// get movie of actor
  router.get("/dir/mov/:dirId", async function (req, res, next) {
    console.log(req.params.dirId)
    try {  
      const [rows, fields] = await pool.query("SELECT mov_title, mov_rate, mov_pic FROM movie join movie_director using(mov_id) join director using(dir_id) where dir_id = ?",
      [req.params.dirId]);
      // console.log(rows);
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
  });
exports.router = router;