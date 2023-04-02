const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

// routers
const indexRouter = require('./routes/index')
const regisRouter = require('./routes/registration')
// const commentRouter = require('./routes/comment')

app.use(indexRouter.router)
app.use(regisRouter.router)
// app.use(commentRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})