/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const TodoItem = ({
  task,
  deleteTask,
  toggleCompleted,
  saveTask
}) => {
  function handleChange() {
    toggleCompleted(task.id);
  }

  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function editTask(event) {
    setEditText(event.target.value);
  }

  function switchEdit() {
    setIsEdit(!isEdit);
  }

  function handleSave() {
    switchEdit();
    saveEditedTask();
  }

  function saveEditedTask(){
    saveTask(task.id, editText)
  }

  return (
    <div className='content'>
      
      <input type='checkbox' checked={task.completed} onChange={handleChange} />

      {isEdit ? (
        <>
          <input
            type='text'
            value={editText}
            onChange={editTask}
            onBlur={handleSave}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </p>
          <button onClick={switchEdit}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default TodoItem;
