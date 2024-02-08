// components/AddTaskForm.js

import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    addTask({ task, description, status: 'Sin terminar' });
    setTask('');
    setDescription('');
  };

  return (
    <div style={formContainerStyle}>
      <input
        type="text"
        placeholder="Tarea"
        value={task}
        style={inputStyle}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        style={inputStyle}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask} style={buttonStyle}>Crear Tarea</button>
    </div>
  );
};

const formContainerStyle = {
  width: '400px',
  padding: '20px',
  margin: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  margin: '8px 0',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  marginTop: '16px',
  alignSelf: 'flex-end',
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: '#4caf50',
  color: '#fff',
  cursor: 'pointer',
};

export default AddTaskForm;
