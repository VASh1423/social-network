const { Schema, model } = require("mongoose");

const Posts = new Schema({
  userId: {type: String, require: true},
  description: {type: String, require: true},
  img:{type: String},
  likes:{type: Array, default: []}
}, {timestamps: true})

module.exports = model('Posts', Posts)