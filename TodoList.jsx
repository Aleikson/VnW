import { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import { IoIosAddCircleOutline } from 'react-icons/io';

const TodoList = () => {
  const [task, setTask] = useState(() => {
    const saveTask = localStorage.getItem('task');
    return saveTask ? JSON.parse(saveTask) : [];
  });

  const [text, setText] = useState([]);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTask([...task, newTask]);
  }

  function deleteTask(id) {
    setTask(task.filter((task) => task.id !== id));
  }

  function saveTask(id, newText) {
    setTask(task.map(item => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      }));
  }

  function toggleCompleted(id) {
    setTask(
      task.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }       return task;
      })
    );
  }

  return (
    <div className='container'>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => addTask(text)}>
        <IoIosAddCircleOutline />
      </button>
      {task.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          saveTask={saveTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
