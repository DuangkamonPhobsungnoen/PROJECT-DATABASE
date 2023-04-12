const express = require('express');
const pool = require('../config.js')

router = express.Router();

// get
router.get("/watch/:userId", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query("select *  from watch_list join movie using(mov_id) where u_id = ?",
            [req.params.userId]);
            res.json(rows)
    } catch (err) {
        console.log(err)
        return next(err);
    }
});

// check
router.post("/watch/check", async function (req, res, next) {
    const { u_id, mov_id } = req.body
    // console.log(u_id, mov_id);
    try {
        const [rows, fields] = await pool.query("select u_id, mov_id from watch_list where u_id = ? and mov_id = ? ",
            [u_id, mov_id]);
            
            if(rows.length == 0){
                return res.json({
                    "state": false
                });
            } else{
                return res.json({
                    "state": true
                });
            }

            
    } catch (err) {
        console.log(err)
        return next(err);
    }
});

// add
router.post("/watch/add", async function (req, res, next) {
    const { u_id, mov_id } = req.body
    console.log(u_id, mov_id);
    try {
        const [rows, fields] = await pool.query("INSERT INTO watch_list (u_id, mov_id) value (?, ?) ",
            [u_id, mov_id]);
    } catch (err) {
        console.log(err)
        return next(err);
    }
});
// delete
router.post("/watch/delete", async function (req, res, next) {
    const { u_id, mov_id } = req.body
    console.log(u_id, mov_id);
    try {
        const [rows, fields] = await pool.query("DELETE FROM watch_list WHERE u_id = ? and mov_id = ?",
            [u_id, mov_id]);
    } catch (err) {
        console.log(err)
        return next(err);
    }
});

exports.router = router;