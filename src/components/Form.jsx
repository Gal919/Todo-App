import React, { useState } from "react";
import '../styles/Form.scss'

const Form = () => {
  const [todo, setTodo] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
      setTodo({
          name: '',
          description: '',
      })
    
  }

  return (
    <div className="form-container">
      <div className="form-input-container">
        <form className="form-grid-container">
          <h3>Name</h3>
          <h3>Description</h3>
          <input
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            type="text"
            value={todo.name}
          />
          <input
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            type="text"
            value={todo.description}
          />
        </form>
        <button className="form-button" onSubmit={handleSubmit}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Form;
