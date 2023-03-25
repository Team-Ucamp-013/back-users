const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

const router = require('./apis')

app.use(cors())

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.send({
    message: 'hola mundo'
  })
})

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
