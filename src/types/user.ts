export interface StateProp {
    users: any[]
    loading: boolean
    error: null | string
}
interface IUser {
    name: string
    id: number
}
export enum ActionEnum {
    FETCH_USERS= "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR ="FETCH_USERS_ERROR"
}

interface ActionUserFetch {
    type: ActionEnum.FETCH_USERS
}
interface ActionUserSuccessFetch {
    type: ActionEnum.FETCH_USERS_SUCCESS
    payload: IUser[]
}
interface ActionUserErrorFetch {
    type: ActionEnum.FETCH_USERS_ERROR
    payload: string
}
export type ActionTypes = ActionUserFetch | ActionUserSuccessFetch | ActionUserErrorFetch