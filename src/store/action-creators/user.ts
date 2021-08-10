import {ActionEnum, ActionTypes} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";
//Создание экшена
export const fetchUsers = () => {
    //Возвращаем асинхронный каллбэк
    //Передаем аргументом диспатч с типом диспатч и типом данного экшена
    return async (dispatch: Dispatch<ActionTypes>) => {
        //Оборачиваем в блок try catch
        try {
            // Запускаем первый кейс, поле загрузки меняется на тру в компоненте рисуется лоадер
            dispatch({type: ActionEnum.FETCH_USERS})
                // Отправляем гет запрос записываем ответ в респонс
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            //Вызываем второй кейс загрузка завершается пейлоадом передаем ответ
            dispatch({type: ActionEnum.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            //Если произойдет ошибка сервера сработает этот кейс и компонент отрисует ошибку
            dispatch({type: ActionEnum.FETCH_USERS_ERROR, payload: 'Произошла ошибка'})
        }
    }
 }