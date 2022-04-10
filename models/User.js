const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') // npm i jsonwebtoken bcryptjs
const jwt = require('jsonwebtoken') // npm i jsonwebtoken bcryptjs

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please submit your name']
  },
  // * add telephone numbers
  telephoneNumber: {
    type: String,
    required: [true, 'Please submit your telephone number'],
    unique: true,
    match: [
      /^[0]{1}\d{1,2}?\-\d{7}/,
      'Please add a valid telephone number. Expample: "095-1001000" or "02-1001000"'
    ]
  },
  email: {
    type: String,
    required: [true, 'please submit your email'],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please set your password'],
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
})

//Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}
// match user entered password to hashed pasword in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)
