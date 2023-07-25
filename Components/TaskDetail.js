import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`)
      .then((response) => setTask(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default TaskDetail;
