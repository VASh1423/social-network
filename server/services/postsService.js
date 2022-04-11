const Posts = require("../models/Posts")

class postsService{
  async createPost(newPost){
    return await newPost.save()
  }

  async getOwnPosts(id){
    return await Posts.find({userId: id})
  }

  async getPosts(){
    return await Posts.find()
  }
}

module.exports = new postsService()