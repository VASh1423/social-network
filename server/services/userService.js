const User = require('../models/User')

class userService{
  async getUser(id){
    return await User.findById(id)
  }

  async addFriend(id, userId){
    const user = await User.findById(id)

    if(!user.friends.includes(userId)){
      return await user.updateOne({$push: {friends: userId}})
    } else {
      return await user.updateOne({$pull: {friends: userId}})
    }
  }

  async getFriends(id){
    const user = await User.findById(id);
    const friends = await Promise.all(
      user.friends.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });

    return friendList
  }
}

module.exports = new userService()