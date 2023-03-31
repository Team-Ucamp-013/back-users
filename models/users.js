const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  lastName: String,
  age: Number,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
},
  {
    versionKey: false,
    timestamps: true
  })

UserSchema.plugin(uniqueValidator, { message: 'Email already exists' });

UserSchema.pre('save', function (next) {
  console.log('-------antes---------')
  console.log(this.email, this.password)
  console.log('-------------------')
  const hasdhedPassword = bcrypt.hashSync(this.password, 12)
  console.log('-------despues--------')
  console.log(this.email, this.password)
  console.log('-------------------')
  this.password = hasdhedPassword
  next()
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel