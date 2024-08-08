import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => { 
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      editTodo(value, task.id);
      setValue(""); // Clear the input field after submission
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Enter updates'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update</button>
    </form>
  );
};

export default EditTodoForm;
