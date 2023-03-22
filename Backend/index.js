const express = require('express')
const mysql = require('mysql2');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spike_test', //ชื่อ database
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

app.get("/read", async (req, res) => {
  try {
      connection.query("SELECT * FROM users", (err, results, fields) => {
          if (err) {
              console.log(err);
              return res.status(400).send();
          }
          res.status(200).json(results)
      })
  } catch(err) {
      console.log(err);
      return res.status(500).send();
  }
})
app.post("/create", async (req, res) =>{
  const { name } = req.body ?? {};
  console.log(req.body)
  try {
      connection.query(
          "INSERT INTO users(name) VALUES(?)",
          [name],
          (err, results, fields) => {
              if (err) {
                  console.log("Error while inserting a user into the database", err);
                  return res.status(400).send();
              }
              console.log(results)
              return res.status(201).json({ message: "New user successfully created!"});
          }
      )
  } catch(err) {
      console.log(err);
      return res.status(500).send();
  }
})
app.delete("/delete/:id", async (req, res) =>{
  const id  = req.params.id;
//   console.log(req.params.id)
//   console.log(id)
  try {
      connection.query(
          "DELETE FROM users WHERE id = ?",
          [id],
          (err, results, fields) => {
              if (err) {
                  console.log("Error while inserting a user into the database", err);
                  return res.status(400).send();
              }
              console.log(results)
              return res.status(201).json({ message: " user delete successfully"});
          }
      )
  } catch(err) {
      console.log(err);
      return res.status(500).send();
  }
})
app.put("/edit/:id", async (req, res) =>{
  const { name } = req.body ?? {};
  const id = req.params.id
  console.log(name)
  console.log(id)
  try {
      connection.query(
          "UPDATE users SET name=? WHERE id=?",
          [name, id],
          (err, results, fields) => {
              if (err) {
                  console.log("Error while inserting a user into the database", err);
                  return res.status(400).send();
              }
              console.log(results)
              return res.status(201).json({ message: "Update user successfully"});
          }
      )
  } catch(err) {
      console.log(err);
      return res.status(500).send();
  }
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
