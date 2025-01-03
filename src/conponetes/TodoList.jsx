import React, { useState, useEffect } from "react";
import "./TodoList.css";
const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    // Obtener las tareas guardadas en localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };
  const saveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText("");
  };
  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Guardar</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button
                  className="complete-button"
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Desmarcar" : "Completar"}
                </button>
                <button
                  className="edit-button"
                  onClick={() => startEditing(index)}
                >
                  Editar
                </button>
                <button onClick={() => removeTask(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
