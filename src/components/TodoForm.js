import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => { 
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue(""); // Clear the input field after submission
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='What are your tasks today?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};

export default TodoForm;
