const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

// routers
const indexRouter = require('./routes/index')
// const postRouter = require('./routes/post')
// const commentRouter = require('./routes/comment')

app.use(indexRouter.router)
// app.use(postRouter.router)
// app.use(commentRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})