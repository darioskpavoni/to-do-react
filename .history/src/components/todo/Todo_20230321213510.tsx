import React from "react";

interface ITodo {
  text: string;
}

const Todo: JSX.Element = ({ text: string }) => {
  return <div>{text}</div>;
};

export default Todo;
