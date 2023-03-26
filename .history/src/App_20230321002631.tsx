import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

function App() {
  const [setCount, count] = useState(1);

  const addTodo = (e: React.SyntheticEvent) => {
    const input = document.querySelector(".to-do-input") as HTMLInputElement;

    if (!input.value) {
      return;
    }

    input.value = "";
  };

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(e);
    }
  };

  return (
    <div className="App">
      <h1>A very simple To-Do app with React</h1>
      <div className="actions">
        <input
          className="to-do-input"
          type={"text"}
          onKeyDown={keyDownHandler}
        />
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div className="todos">{/* todos */}</div>
    </div>
  );
}

export default App;