import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', {
        title: newTask,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task title..."
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.title}</span>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


