import React from 'react';
import TodoList from "./components/TodoList";
import TrueTodoList from "./components/TrueTodoList";
import PostsLists from "./components/PostsLists";


function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />
      <TrueTodoList />
      <hr/>
      <PostsLists />
    </div>
  );
}

export default App;
