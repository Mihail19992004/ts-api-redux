import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchPosts} from "../store/action-creators/posts";

const PostsLists: FC = () => {
    const dispatch = useDispatch()
    const {posts,loading,error} = useTypedSelector(state => state.posts)
    useEffect(()=> {
        dispatch(fetchPosts())
    }, [])
    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка</h1>
    }
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export default PostsLists;