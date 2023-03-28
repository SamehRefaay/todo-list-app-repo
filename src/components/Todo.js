import React from "react";

const Todo = (props) => {
  return (
    <div className="todo-container">
      <div
        style={{ textDecoration: props.todo.isComplete ? "line-through" : "" }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.onDelete}>x</button>
    </div>
  );
};

export default Todo;
