import React from "react";

interface ITodo {
  text: string;
}

const Todo = (props: ITodo) => {
  return <div>{props.text}</div>;
};

export default Todo;
