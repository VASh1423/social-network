const { Schema, model } = require("mongoose");

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: {type: String, required: true},
  userInfoId: {type: String, required: true},
  country: {type: String, required: true},
  city: {type: String, required: true},
  dateOfBirth: {type: String, required: true},
  avatar: {type: String, required: true},
  backgroundPhoto: {type: String, required: true},
})

module.exports = model('User', User)