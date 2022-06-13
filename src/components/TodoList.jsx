import React, { useState } from 'react';
import '../styles/TodoList.scss'
import Form from './Form';
import Todo from './Todo';

const TodoList = () => {
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...list, todo]);
  };

  return (
    <div className="todo-list-container">
      <Form addTodo={addTodo} />

      {list.map((todo, index) => {
        return (
          <Todo name={todo.name} description={todo.description} index={index} />
        );
      })}
    </div>
  );
};

export default TodoList;
