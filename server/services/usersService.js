const User = require('../models/User')

class userService{
  async getAll(){
    return await User.find()
  }
}

module.exports = new userService()