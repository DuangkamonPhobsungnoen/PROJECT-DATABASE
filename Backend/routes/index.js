const express = require('express');
const pool = require('../config.js')


router = express.Router();

router.get("/tag", async function (req, res, next) {
    try {
        // const [rows, fields] = await pool.query('SELECT * FROM tag ')
        // return res.json(rows)
        
    } catch (error) {
        next(err)
    }
    
  });

  
  router.get("/anime", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie where mov_type = "anime"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });
  router.get("/movie", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie where mov_type = "movie"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  router.get("/series", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM movie where mov_type = "series"')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

exports.router = router;