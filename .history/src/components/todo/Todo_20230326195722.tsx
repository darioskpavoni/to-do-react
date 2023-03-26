import React from "react";
import "./Todo.css";

interface ITodo {
  text: string;
  remove: () => void;
}

const Todo = (props: ITodo) => {
  const deleteTodoHandler = (e: React.SyntheticEvent) => {
    // implement component removal
    // filter current todos state and remove this one
  };

  return (
    <div className="todo-item">
      <div className="delete-btn" onClick={deleteTodoHandler}>
        X
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Todo;
