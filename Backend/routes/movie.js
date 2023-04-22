const express = require('express');
const pool = require('../config.js')
// const path = require("path")

router = express.Router();
// add
router.post("/movie/add", async function (req, res, next) {
  const { title, story, year, time, poster, trailer, type, genres, dir_fname, dir_lname } = req.body
  // console.log(title, story, year, time, poster, trailer, type, parseInt(genres) + 100, dir_fname, dir_lname)
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
      [movId, parseInt(genres)]);

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

router.get("/movie/edit/:movId", async function (req, res, next) {
  // Your code here
  try {
    const [rows1, fields1] = await pool.query("select * from movie join movie_director using(mov_id) join director using(dir_id) join movie_genres using(mov_id) join genres using(gen_id) WHERE mov_id = ?",
    [req.params.movId]);

    return res.json(rows1)
  
  } catch (err) {
    console.log(err)
    return next(err);
  }
});


// update movie
router.put("/movie/edit/:movId", async function (req, res, next) {
  const { title, story, year, time, poster, trailer, type, genres, dir_fname, dir_lname  } = req.body
  // console.log(title, story, year, time, poster, trailer, type, genres, dir_fname, dir_lname, req.params.movId);
  try {
   
    // update movie
    const [rows, fields] = await pool.query("UPDATE movie SET mov_title=?,mov_summary=?,mov_year=?, mov_time=?, mov_type=?, mov_pic=?, mov_trailer=?  WHERE mov_id = ?",
      [title, story, year, time, type, poster,trailer, req.params.movId]);
    
    // update movie_genres
    const [rows1, fields1] = await pool.query("UPDATE movie_genres SET gen_id = ?  WHERE mov_id = ?",
      [genres, req.params.movId]);

     const [rows2, fields2] = await pool.query("SELECT dir_id FROM movie_director  WHERE mov_id = ?",
     [req.params.movId]);

      const dir_id = rows2[0].dir_id

      const [rows3, fields3] = await pool.query("UPDATE director SET dir_fname = ?, dir_lname = ? WHERE dir_id = ?",
      [dir_fname, dir_lname, dir_id]);
      // console.log(rows2);
    // return res.json(rows2);

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