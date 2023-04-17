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
        return res.json({message:`added actor_id ${actId} in mov_id ${movId}`})
    } catch (error) {
        console.log(error);
        next(error)
    }
    
  });



  

exports.router = router;