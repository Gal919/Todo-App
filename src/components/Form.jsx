import React, { useState } from 'react';
import '../styles/Form.scss';

const Form = ({addTodo}) => {
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e) => {
    addTodo(input);
    e.preventDefault(); 
      setInput({
          name: '',
          description: '',
      });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        id="input-form"
        className="form-grid-container"
      >
        <h3>Name</h3>
        <h3>Description</h3>
        <input
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          type="text"
          value={input.name}
        />
        <input
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          type="text"
          value={input.description}
        />
      </form>
      <button type="submit" form="input-form" className="form-button">
        Add Todo
      </button>
    </div>
  );
};

export default Form;
