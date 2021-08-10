import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";

const TodoList: FC = () => {

    const dispatch = useDispatch()
    const {error,loading,users} = useTypedSelector(state => state.user)
    useEffect(()=> {
        dispatch(fetchUsers())
    }, [])
    console.log(users)
    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка</h1>
    }
    return (
        <div>
            {users.map(user=> <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default TodoList;