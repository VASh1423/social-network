const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const usersRouter = require('./routers/users.router')
const userRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')
const postsRouter = require('./routers/posts.router')
const PORT = process.env.PORT||config.get('serverPort')

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', usersRouter)
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'))
    app.listen(PORT, () => {console.log('Server has been started on PORT: ' + PORT)})
  } catch (error) {
    console.log(error);
  }
}

start()