export interface StateTodo {
    todos: any[]
    loading: boolean
    error: null| string
}

export enum ActionTipesEnum {
    TODO_FETCH= 'TODO_FETCH',
    TODO_FETCH_SUCCESS = "TODO_FETCH_SUCCESS",
    TODO_FETCH_ERROR = "TODO_FETCH_ERROR"
}

interface ActionFetch {
    type: ActionTipesEnum.TODO_FETCH
}
interface ActionFetchSuccess {
    type: ActionTipesEnum.TODO_FETCH_SUCCESS
    payload: any[]
}
interface ActionFerchError {
    type: ActionTipesEnum.TODO_FETCH_ERROR
    payload: string
}

export type ActionFetchType = ActionFetch | ActionFerchError | ActionFetchSuccess