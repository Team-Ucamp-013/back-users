const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

const apiRouter = require('./apis')

app.use(cors())

require('./db/mongodb')
app.use(express.json())

app.use('/api/v1', apiRouter)

app.get('/', (req, res) => {
  res.send({
    message: 'hola mundo'
  })
})

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
