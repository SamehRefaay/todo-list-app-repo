import { React, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  let [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      })
    );
  };
  const handleTodoToShow = (s) => {
    setTodoToShow(s);
  };
  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.isComplete);
  } else if (todoToShow === "complete") {
    todos = todos.filter((todo) => todo.isComplete);
  }
  const handleRemoveAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };
  const handleToggleAllComplete = () => {
    setToggleAllComplete(!toggleAllComplete);
    setTodos(todos.map((todo) => ({ ...todo, isComplete: toggleAllComplete })));
  };
  return (
    <div>
      <div className="main-container">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => handleToggleComplete(todo.id)}
          />
        ))}
        <div className="btns-container">
          <button
            className="update-btn btn"
            onClick={() => handleTodoToShow("all")}
          >
            All
          </button>
          <button
            className="update-btn btn"
            onClick={() => handleTodoToShow("active")}
          >
            Active
          </button>
          <button
            className="update-btn btn"
            onClick={() => handleTodoToShow("complete")}
          >
            Complete
          </button>
        </div>
        <div className="btns-container">
          {todos.some((todo) => todo.isComplete) ? (
            <button
              className="update-btn btn"
              onClick={handleRemoveAllComplete}
            >
              Remove All Complete Todos
            </button>
          ) : null}
          <button className="update-btn btn" onClick={handleToggleAllComplete}>
            Toggle All Complete: {`${toggleAllComplete}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
