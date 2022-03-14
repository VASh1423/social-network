const User = require('../models/User')

class userService{
  async getUser(id){
    return await User.findById(id)
  }
}

module.exports = new userService()