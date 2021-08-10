
import {combineReducers} from 'redux'
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    posts: postsReducer
})