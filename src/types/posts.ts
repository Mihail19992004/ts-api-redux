export interface StatePosts {
    posts: any[]
    loading: boolean
    error: null | string
}

export enum PropsActionEnum {
    POST_FETCH = "POST_FETCH",
    POST_FETCH_SUCCESS = "POST_FETCH_SUCCESS",
    POST_FETCH_ERROR = "POST_FETCH_ERROR"
}

interface PostFetchAction {
    type: PropsActionEnum.POST_FETCH
}
interface PostFetchSuccessAction {
    type: PropsActionEnum.POST_FETCH_SUCCESS
    payload: any[]
}
interface PostFetchErrorAction {
    type: PropsActionEnum.POST_FETCH_ERROR
    payload: string
}

export type PostsAction = PostFetchAction | PostFetchErrorAction | PostFetchSuccessAction