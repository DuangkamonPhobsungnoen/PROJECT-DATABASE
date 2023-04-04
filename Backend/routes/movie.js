const express = require('express');
const pool = require('../config.js')

router = express.Router();


  // add
  router.post("/movie/add", async function (req, res, next) {
    const {title, summary, year, time, type} = req.body
    console.log({title, summary, year, time, type})
    try{
        const [rows, fields] = await pool.query("INSERT INTO movie (mov_title, mov_summary, mov_year, mov_time, mov_type) value(?, ?, ?, ?, ?)", 
        [title, summary, year, time, type]);
          alert("A new movie is added")
          return res.json({"message":`A new movie is added`});
         
      } catch (err) {
          console.log(err)
          return next(err);
      }
  });

  // delete
  router.delete("/movie/delete/:movId", async function (req, res, next) {
    console.log(req.params.movId)
    // Your code here
    try{
      // console.log(req.params.movId);
        const [rows, fields] = await pool.query("DELETE FROM movie WHERE mov_id = ?",
         [req.params.movId]);
        return res.json({
            "message": `Comment ID ${req.params.movId} is deleted.`
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
  });


  router.put("/movie/edit/:movId", async function (req, res, next) {
    // Your code here
    const {title, summary, year, time, type} = req.body
    // console.log(post_title, post_desc, tag_id);
    try{
        const [rows, fields] = await pool.query("UPDATE movie SET mov_title=?,mov_summary=?,mov_year=?, mov_time=?, mov_type=?  WHERE mov_id = ?",
         [title, summary, year, time, type, req.params.movId]);

        //  const [rows1, fields1] = await pool.query("SELECT * FROM post p JOIN tag t ON (p.tag_id = t.tag_id) JOIN member m ON (m.mem_id = p.mem_id) WHERE post_id = ?",
        //  [req.params.postId]);

         return res.json(rows);
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
  });
  
// detail
  router.get("/movie/:movId", async function (req, res, next) {
    // Your code here
    try{

         const [rows, fields] = await pool.query("SELECT * FROM movie  where mov_id = ? ",
         [req.params.movId]);

        return res.json(rows);
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
  });

exports.router = router;