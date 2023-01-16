import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { commentsReducer } from "./commentsReducer";
import { postsReducer } from "./postsReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   posts: postsReducer, 
   comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));