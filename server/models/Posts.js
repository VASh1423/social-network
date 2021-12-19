const { Schema, model } = require("mongoose");

const Posts = new Schema({
  userId: {type: String, required: true},
  description: {type: String, required: true}
})

module.exports = model('Posts', Posts)