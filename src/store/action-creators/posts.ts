import {Dispatch} from "react";
import {PostsAction, PropsActionEnum} from "../../types/posts";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PropsActionEnum.POST_FETCH})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type: PropsActionEnum.POST_FETCH_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: PropsActionEnum.POST_FETCH_ERROR, payload: 'произошла ошибка'})
        }
    }
}