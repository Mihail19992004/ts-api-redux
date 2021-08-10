import {ActionEnum, ActionTypes, StateProp} from "../../types/user";


const initState: StateProp = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state=initState,action: ActionTypes) : StateProp => {
    switch (action.type) {
        case ActionEnum.FETCH_USERS:
            return {users: [], error: null, loading: true}
        case ActionEnum.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case ActionEnum.FETCH_USERS_ERROR:
            return {users: [], loading: false, error: action.payload}
        default:
            return state
    }
}