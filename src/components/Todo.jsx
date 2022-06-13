import React from 'react';
import '../styles/Todo.scss'

const Todo = ({ name, description }) => {
  return (
    <div className='todo-container'>
      <div className='todo-info'>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div className='todo-actions'>
        <button>complete</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Todo;
