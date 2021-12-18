const express = require('express')
const config = require('config')

const PORT = process.env.PORT||config.get('serverPort')

const app = express()

app.use(express.json())

app.get('/', () => {console.log('Hello world')})

const start = async () => {
  try {
    app.listen(PORT, () => {console.log('Server has been started on PORT: ' + PORT)})
  } catch (error) {
    console.log(error);
  }
}

start()