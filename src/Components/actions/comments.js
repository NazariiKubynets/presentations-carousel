import axios from "axios"
import { setCommentsAction } from "../../store/commentsReducer";



export const getComments = (postId) => {
   return async (dispatch) => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+ postId)
      dispatch(setCommentsAction(response.data));
   }
}
