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

  async getPostAndLike(id, userId){
    const post = await Posts.findById(id)
    if(!post.likes.includes(userId)){
      return await post.updateOne({$push: {likes: userId}})
    } else {
      return await post.updateOne({$pull: {likes: userId}})
    }
  }
}

module.exports = new postsService()