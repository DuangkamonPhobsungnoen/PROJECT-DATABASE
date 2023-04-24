const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

// routers
const indexRouter = require('./routes/index')
const regisRouter = require('./routes/registration')
const movieRouter = require('./routes/movie')
const reviewRouter = require('./routes/review')
const watch_listRouter = require('./routes/watch_list')
const actorRouter = require('./routes/actor')
const userRouter = require('./routes/user')
// const commentRouter = require('./routes/comment')

app.use(indexRouter.router)
app.use(regisRouter.router)
app.use(movieRouter.router)
app.use(reviewRouter.router)
app.use(watch_listRouter.router)
app.use(actorRouter.router)
app.use(userRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})