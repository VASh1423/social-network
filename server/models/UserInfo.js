const { Schema, model } = require("mongoose");

const UserInfo = new Schema({
  userId: {type: String, required: true},
  country: {type: String, required: true},
  city: {type: String, required: true},
  dateOfBirth: {type: String, required: true},
  avatar: {type: String, required: true},
  backgroundPhoto: {type: String, required: true},
})

module.exports = model('UserInfo', UserInfo)