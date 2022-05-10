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

  async addFriend(req, res){
    try {
      await userService.addFriend(req.body.id, req.body.userId)

      return res.status(200).json('User has been updated')
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getFriends(req, res){
    try {
      const friends = await userService.getFriends(req.params.id)

      return res.status(200).json(friends)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new userController()