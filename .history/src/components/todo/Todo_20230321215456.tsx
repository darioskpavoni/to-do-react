import React from "react";
import "./Todo.css";

interface ITodo {
  text: string;
}

const Todo = (props: ITodo) => {
  return (
    <div className="todo-item">
      <div className="delete-btn">X</div>
      <p>{props.text}</p>
    </div>
  );
};

export default Todo;
