import axios from "axios";
import { setOwenPosts } from "../reducers/postsReducer";

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