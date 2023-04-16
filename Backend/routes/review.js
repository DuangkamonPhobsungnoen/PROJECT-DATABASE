const express = require('express');
const pool = require('../config.js')

router = express.Router();

router.get("/rev/show", async function (req, res, next) {
  // Your code here
  try {

    const [rows, fields] = await pool.query("select r.rev_id, r.rev_like, u.u_user_name, r.create_at, m.mov_title, m.mov_rate, m.mov_pic, r.rev_text from review r join user u on(u.u_id = r.u_id) join movie m on(r.mov_id = m.mov_id) order by rev_like desc limit 10");
// console.log("555");
    return res.json(rows);

  } catch (err) {
      console.log(err)
      return next(err);
  }
});

// add
router.post("/rev/add", async function (req, res, next) {
  const { rev_text, rev_rate, u_id, mov_id } = req.body
  console.log(rev_text, rev_rate, u_id, mov_id);
  try {
    const [rows0, fields0] = await pool.query("select * from review where u_id = ? and mov_id = ?",
      [u_id, mov_id]);

    if (rows0.length == 0) {
      const [rows, fields] = await pool.query("INSERT INTO review (rev_text, rev_rate, u_id, mov_id) value (?, ?, ?, ?) ",
        [rev_text, rev_rate, u_id, mov_id]);
      // const insertId = rows.insertId
      // console.log(insertId);
      // const [rows1, fields1] = await pool.query("SELECT * FROM review WHERE rev_id = ?",
      //   [insertId]);

      return res.json({status:"added"})

    } else {
      return res.json({status:'error',message:"You Already Review This Movie"})
    }



  } catch (err) {
    console.log(err)
    return next(err);
  }
});

router.put('/rev/addlike/:revId', async function(req, res, next){
    const {user} = req.body
    // console.log(user);
  try{
    const [rows0, fields0] = await pool.query("SELECT * FROM like_review WHERE rev_id = ? and u_id = ?",
    [req.params.revId, user]);

    if(rows0.length == 0){
      const [rows, fields] = await pool.query("UPDATE review SET rev_like = (SELECT rev_like FROM review WHERE rev_id = ?)+1 WHERE rev_id = ?",
       [req.params.revId, req.params.revId]);
      // add like_review
       const [rows2, fields2] = await pool.query("insert into like_review(u_id, rev_id) values(?,?)",
       [user, req.params.revId]);

       const [rows1, fields1] = await pool.query("SELECT rev_like FROM review WHERE rev_id = ?",
       [req.params.revId]);

      return res.json({
        likeNum:rows1[0].rev_like
      });
      // console.log('wanggg pao')
    }else{

      const [rows, fields] = await pool.query("UPDATE review SET rev_like = (SELECT rev_like FROM review WHERE rev_id = ?)-1 WHERE rev_id = ?",
       [req.params.revId, req.params.revId]);

       const [rows2, fields2] = await pool.query("delete from like_review where u_id = ? and rev_id = ?",
       [user, req.params.revId]);

       const [rows1, fields1] = await pool.query("SELECT rev_like FROM review WHERE rev_id = ?",
       [req.params.revId]);

      return res.json({
        likeNum:rows1[0].rev_like
      });
    }


      
  
    } catch (err) {
      console.log(err)
      return next(err);
    }

});

// delete
router.delete("/rev/delete/:revId", async function (req, res, next) {
  // Your code here
  try {
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
  const { rev_text } = req.body
  try {
    const [rows, fields] = await pool.query("UPDATE review SET rev_text = ? where rev_id = ? ",
      [rev_text, req.params.revId]);

    return res.json(rows);

  } catch (err) {
    console.log(err)
    return next(err);
  }
});

//   show all review
router.get("/rev/:movId", async function (req, res, next) {
  // Your code here
  try {

    const [rows, fields] = await pool.query("SELECT * FROM user join review using (u_id) where review.mov_id = ? ",
      [req.params.movId]);

    return res.json(rows);

  } catch (err) {
    console.log(err)
    return next(err);
  }
});









exports.router = router;