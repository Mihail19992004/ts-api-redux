import {Dispatch} from "react";
import {ActionFetchType, ActionTipesEnum} from "../../types/todo";
import axios from "axios";

export const fetchTodo = () => {
    return async (dispatch: Dispatch<ActionFetchType>) => {
        try {
            dispatch({type: ActionTipesEnum.TODO_FETCH})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({type: ActionTipesEnum.TODO_FETCH_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: ActionTipesEnum.TODO_FETCH_ERROR, payload: 'Произошла ошибка загрузки'})
        }
    }
}