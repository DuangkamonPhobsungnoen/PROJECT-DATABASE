const express = require('express');
const pool = require('../config.js')


router = express.Router();



  
  router.get("/anime", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie m join movie_genres mg on(m.mov_id = mg.mov_id) join genres g on(mg.gen_id = g.gen_id) where mov_type = "anime"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });
  router.get("/movie", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie m join movie_genres mg on(m.mov_id = mg.mov_id) join genres g on(mg.gen_id = g.gen_id) where mov_type = "movie"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  router.get("/series", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie m join movie_genres mg on(m.mov_id = mg.mov_id) join genres g on(mg.gen_id = g.gen_id) where mov_type = "series"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  router.post("/trending", async function (req, res, next) {
    const {type} = req.body
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie where mov_type = ? order by mov_rate desc limit 6',
        [type])
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  router.get("/trending", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie order by mov_rate desc limit 6')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  router.get("/all", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT mov_title, mov_year, mov_id  FROM movie ')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  
  

exports.router = router;