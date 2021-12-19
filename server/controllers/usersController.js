const usersService = require('../services/usersService')

class userController{
  async getUsers(req, res){
    try {
      const users = await usersService.getAll()
  
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = new userController()