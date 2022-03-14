const userService = require("../services/userService")

class userController{
  async getUser(req, res){
    try {
      const user = await userService.getUser(req.params.id)
  
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new userController()