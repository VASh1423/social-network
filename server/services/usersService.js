const User = require('../models/User')

class usersService{
  async getAll(){
    return await User.find()
  }
}

module.exports = new usersService()