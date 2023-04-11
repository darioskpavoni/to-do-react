import React from "react";
import "./Todo.css";

interface ITodoCmp {
  id: string;
  text: string;
  remove: (id: string) => void;
}

const Todo = (props: ITodoCmp) => {
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
