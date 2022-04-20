import axios from "axios";
import { setOwenPosts, addOwnPosts } from "../reducers/postsReducer";

export const getOwnPosts = () => {
  return async (dispatch: any) => {
    try {
      const res = await axios.get('/api/posts/622f163b2c904a91ed57acf6')
      dispatch(setOwenPosts(res.data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const postOwnPosts = (newPost: any) => {
  return async (dispatch: any) => {
    try {
      await axios.post('api/posts', newPost)
      dispatch(addOwnPosts(newPost))
      dispatch(getOwnPosts())
    } catch (error) {
      console.log(error);
    }
  }
}