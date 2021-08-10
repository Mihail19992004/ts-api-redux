import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchTodo} from "../store/action-creators/todo";

const TrueTodoList:FC = () => {
    const {loading,error,todos} = useTypedSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchTodo())
    }, [])
    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка</h1>
    }
    return (
        <div>
            {todos.map(todo=> <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        </div>
    );
};

export default TrueTodoList;