import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title };
    axios.post('http://localhost:5000/tasks', newTask)
      .then((response) => {
        console.log('Task created:', response.data);
        setTitle('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
