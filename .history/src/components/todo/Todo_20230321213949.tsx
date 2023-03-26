import React from "react";
import "./Todo.css";

interface ITodo {
  text: string;
}

const Todo = (props: ITodo) => {
  return <div className="todo-item">{props.text}</div>;
};

export default Todo;
