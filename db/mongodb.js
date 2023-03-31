const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.USER_MONGO}:${process.env.USER_MONGO_PASS}@cluster0.nq9xme0.mongodb.net/users?retryWrites=true&w=majority`

mongoose.connect(url)
  .then((res) => console.log('Conexión a la base de datos exitosa'))

module.exports = mongoose