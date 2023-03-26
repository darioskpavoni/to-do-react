import React from "react";
import "./Todo.css";

interface ITodo {
  text: string;
  id: string;
  remove: (id: string) => any;
}

const Todo = (props: ITodo) => {
  return (
    <div className="todo-item">
      <div
        className="delete-btn"
        onClick={() => {
          props.remove(props.id);
        }}
      >
        X
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Todo;
