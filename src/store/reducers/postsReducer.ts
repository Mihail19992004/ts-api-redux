import {PostsAction, PropsActionEnum, StatePosts} from "../../types/posts";


const initState : StatePosts = {
    posts: [],
    loading: false,
    error: null
}


export const postsReducer = (state = initState, action: PostsAction) : StatePosts => {
    switch (action.type) {
        case PropsActionEnum.POST_FETCH:
            return {error: null, loading: true, posts: []}
        case PropsActionEnum.POST_FETCH_SUCCESS:
            return {posts: action.payload, loading: false, error: null}
        case PropsActionEnum.POST_FETCH_ERROR:
            return {error: action.payload, loading: false, posts: []}
        default:
            return state
    }
}