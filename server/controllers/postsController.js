const Posts = require("../models/Posts");
const postsService = require("../services/postsService")

class postsController{
  async createPost(req, res){
    try {
      const newPost = new Posts({
        userId: req.body.userId,
        description: req.body.description,
        img: req.body.img,
        likes: []
      })

      await postsService.createPost(newPost)
      return res.status(200).json({message: "Пост был создан"})
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getOwnPosts(req, res){
    try {
      const posts = await postsService.getOwnPosts(req.params.id)
  
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getPosts(req, res){
    try {
      const posts = await postsService.getPosts()
  
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new postsController()