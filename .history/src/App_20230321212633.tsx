import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

function App() {
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = (e: React.SyntheticEvent) => {
    const input = document.querySelector(".to-do-input") as HTMLInputElement;

    if (!input.value) {
      return;
    }

    setTodos(todos.concat(<Todo key={todos.length} />));

    input.value = "";
  };

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(e);
    }
  };

  const removeAllHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      setTodos((todos) => (todos = []));
    }
  };

  return (
    <div className="App" onKeyDown={removeAllHandler}>
      <h1>A very simple To-Do app with React</h1>
      <div className="actions">
        <input
          className="to-do-input"
          type={"text"}
          onKeyDown={keyDownHandler}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos">{todos}</div>
    </div>
  );
}

export default App;
