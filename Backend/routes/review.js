const express = require('express');
const pool = require('../config.js')

router = express.Router();

  // add
  router.post("/rev/add", async function (req, res, next) {
    const {rev_text, rev_rate, u_id, mov_id} = req.body
    console.log(rev_text, rev_rate, u_id, mov_id);
    try{
        const [rows, fields] = await pool.query("INSERT INTO review (rev_text, rev_rate, u_id, mov_id) value (?, ?, ?, ?) " ,
        [rev_text, rev_rate, u_id, mov_id]);
        const insertId = rows.insertId
        // console.log(insertId);
          const [rows1, fields1] = await pool.query("SELECT * FROM review WHERE rev_id = ?",
           [insertId]);
  
          return res.json(rows1)
      } catch (err) {
          console.log(err)
          return next(err);
      }
  });

  // delete
  router.delete("/rev/delete/:revId", async function (req, res, next) {
    // Your code here
    try{
      // console.log(req.params.movId);
        const [rows, fields] = await pool.query("DELETE FROM review WHERE rev_id = ?",
         [req.params.revId]);
        return res.json({
            "message": `Comment ID ${req.params.revId} is deleted.`
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
  });

// update
  router.put("/rev/edit/:revId", async function (req, res, next) {
    // Your code here
    const {rev_text} = req.body
    // console.log(post_title, post_desc, tag_id);
    try{
        const [rows, fields] = await pool.query("UPDATE review SET rev_text = ? where rev_id = ? ",
         [rev_text, req.params.revId]);

        //  const [rows1, fields1] = await pool.query("SELECT * FROM post p JOIN tag t ON (p.tag_id = t.tag_id) JOIN member m ON (m.mem_id = p.mem_id) WHERE post_id = ?",
        //  [req.params.postId]);

         return res.json(rows);
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
  });

//   show all review
  router.get("/rev/:movId", async function (req, res, next) {
    // Your code here
    try{

         const [rows, fields] = await pool.query("SELECT * FROM user join review using (u_id) where review.mov_id = ? ",
         [req.params.movId]);

        return res.json(rows);

      } catch (err) {
        console.log(err)
        return next(err);
      }
  });

exports.router = router;