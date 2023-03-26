import { useState } from "react";
import "./App.css";

function App() {
  const addTodo = (e: React.SyntheticEvent) => {
    const input = document.querySelector(".to-do-input") as HTMLInputElement;

    if (!input.value) {
      return;
    }

    const todosContainer = document.querySelector(".todos") as HTMLDivElement;

    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerText = input.value;

    todosContainer.append(todo);

    input.value = "";
  };

  return (
    <div className="App">
      <h1>A very simple To-Do app with React</h1>
      <div className="actions">
        <input className="to-do-input" type={"text"} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos"></div>
    </div>
  );
}

export default App;
