const usersService = require('../services/usersService')

class usersController{
  async getUsers(req, res){
    try {
      const users = await usersService.getAll()
  
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new usersController()