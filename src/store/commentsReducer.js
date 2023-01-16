const SET_COMMENTS = 'SET_COMMENTS';
const SET_VISIBLE = 'SET_VISIBLE';

const defaultState = {
   comments: [],
   visible: false
}

export const commentsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_COMMENTS:
         return { ...state, comments:action.payload }
      case SET_VISIBLE:
         return { ...state, visible: action.payload }
      default:
         return state;
   }
}

export const setCommentsAction = (payload) => ({ type: SET_COMMENTS, payload });
export const setVisibleAction = (payload) => ({ type: SET_VISIBLE, payload });