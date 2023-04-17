const express = require('express');
const pool = require('../config.js')
// const path = require("path")

router = express.Router();
// add
router.post("/movie/add", async function (req, res, next) {
  const { title, story, year, time, poster, trailer, type, genres, dir_fname, dir_lname } = req.body
  console.log(title, story, year, time, poster, trailer, type, genres, dir_fname, dir_lname)
  const conn = await pool.getConnection()
  // Begin transaction
  await conn.beginTransaction();

  try {
    const [rows, fields] = await conn.query("INSERT INTO movie (mov_title, mov_summary, mov_year, mov_time, mov_type, mov_pic, mov_trailer) value(?, ?, ?, ?, ?, ?, ?)",
      [title, story, year, time, type, poster, trailer]);

    const movId = rows.insertId
    // console.log(movId)

    //add genres
    const [rows1, fields1] = await conn.query("INSERT INTO movie_genres (mov_id, gen_id) value(?, ?)",
      [movId, genres]);

    // director
    const [dir_rows, dir_fields] = await conn.query("SELECT * FROM director where dir_fname = ? and dir_lname = ?",
      [dir_fname, dir_lname]);
    console.log(dir_rows)

    // const dirId = rows.insertId
    if (dir_rows.length === 0) {
      console.log("director doesn't exist")
      const [dir_rows1, dir_fields1] = await conn.query("INSERT INTO director(dir_fname, dir_lname) value(?, ?)",
        [dir_fname, dir_lname]);

      var dirId = dir_rows1.insertId
      console.log(dirId)
    }
    else {
      var dirId = dir_rows[0].dir_id
    }

    //add movie_director
    console.log('dirId', dirId)
    const [dir_rows2, dir_fields2] = await conn.query("INSERT INTO movie_director(dir_id, mov_id) value(?, ?)",
      [dirId, movId]);

    res.json({ movId: parseInt(movId) });
    await conn.commit()
  } catch (err) {
    await conn.rollback();
    console.log(err)
    return next(err);
  }
});

// delete
router.delete("/movie/delete/:movId", async function (req, res, next) {
  // Your code here
  try {
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
  const { title, summary, year, time, type } = req.body
  // console.log(post_title, post_desc, tag_id);
  try {
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
  try {

    const [rows, fields] = await pool.query("SELECT * FROM movie  where mov_id = ? ",
      [req.params.movId]);

    return res.json(rows);

  } catch (err) {
    console.log(err)
    return next(err);
  }
});

exports.router = router;