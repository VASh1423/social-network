const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const userRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')
const PORT = process.env.PORT||config.get('serverPort')

const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', authRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'))
    app.listen(PORT, () => {console.log('Server has been started on PORT: ' + PORT)})
  } catch (error) {
    console.log(error);
  }
}

start()