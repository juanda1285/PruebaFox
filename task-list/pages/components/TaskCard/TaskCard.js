// components/TaskCard.js

import { useState } from 'react';

const TaskCard = ({ task, editTask, deleteTask, completeTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    editTask(task.id, editedTask, editedDescription);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

  return (
    <div style={cardContainerStyle}>
      <div>
        <label style={labelStyle}>Tarea:</label>
        <input
          type="text"
          value={editedTask}
          readOnly={!isEditing}
          style={inputStyle}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      </div>
      <div>
        <label style={labelStyle}>Descripción:</label>
        <input
          type="text"
          value={editedDescription}
          readOnly={!isEditing}
          style={inputStyle}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      </div>
      <div>
        <label style={labelStyle}>Estado : {task.status}</label>
      </div>
      <div style={buttonContainerStyle}>
        {isEditing ? (
          <button onClick={handleSave} style={buttonEditStyle}>
            Guardar
          </button>
        ) : (
          <>
            {task.status !== 'Terminado' && (
              <button onClick={handleEdit} style={buttonEditStyle}>
                Editar
              </button>
            )}

            <button onClick={handleDelete} style={buttonDeleteStyle}>
              Eliminar
            </button>

            {task.status !== 'Terminado' && (
              <button onClick={handleComplete} style={buttonCompleteStyle}>
                Finalizar
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const cardContainerStyle = {
  width: '400px',
  margin: '20px',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '10px',
};

const labelStyle = {
  marginBottom: '5px',
  color: '#000',
};

const inputStyle = {
  width: '100%',
  margin: '8px 0',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const buttonStyle = {
  flex: '1',
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonEditStyle = {
  ...buttonStyle,
  backgroundColor: '#6495ed',
  color: '#fff',
};

const buttonDeleteStyle = {
  ...buttonStyle,
  backgroundColor: '#ff6347',
  color: '#fff',
};

const buttonCompleteStyle = {
  ...buttonStyle,
  backgroundColor: '#32cd32',
  color: '#fff',
};

export default TaskCard;
