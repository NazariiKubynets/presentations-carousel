import axios from "axios"
import { setPostsAction } from "../../store/postsReducer"


export const getPosts = () => {
   return async (dispatch) => {
      const response = await axios.get('http://localhost:3001/posts')
      dispatch(setPostsAction(response.data));
   }
}

