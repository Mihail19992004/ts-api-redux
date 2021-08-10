import {ActionFetchType, ActionTipesEnum, StateTodo} from "../../types/todo";


const initState: StateTodo = {
    todos: [],
    loading: false,
    error: null
}



export const todoReducer = (state = initState, action: ActionFetchType): StateTodo => {
    switch (action.type) {
        case ActionTipesEnum.TODO_FETCH:
            return {todos: [], error: null, loading: true}
        case ActionTipesEnum.TODO_FETCH_SUCCESS:
            return {loading: false, error:null, todos: action.payload}
        case ActionTipesEnum.TODO_FETCH_ERROR:
            return {todos: [], error: action.payload, loading: false}
        default:
            return state
    }
}