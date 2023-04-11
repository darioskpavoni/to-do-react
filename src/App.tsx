import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

interface ITodo {
  id: string;
  text: string;
}

const globalKeyDownHandler = (e: KeyboardEvent) => {
  if (e.key === "Enter" || e.key === "F5") {
    e.stopPropagation();
    return;
  }

  if (e.key === "Escape") {
    displayOverlay(false);
    return;
  }

  displayOverlay(true);
};

function App() {
  const [data, setData] = useState<ITodo[]>([]);

  // Handlers
  const addTodoHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = document.querySelector(".todo-input") as HTMLInputElement;

      if (!input.value) {
        return;
      }

      const todo: ITodo = {
        id: Date.now().toString(),
        text: input.value,
      };

      setData([...data, todo]);

      input.value = "";
      displayOverlay(false);
    }
  };

  const removeHandler = (id: string) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  // Global key event listener
  document.addEventListener("keydown", globalKeyDownHandler);

  // This runs only once at the beginning
  useEffect(() => {
    const localStorageData = localStorage.getItem("data") as string;
    const restoredData = JSON.parse(localStorageData) as ITodo[];

    if (!restoredData?.length) {
      return;
    }

    setData([...restoredData]);
  }, []);

  // Updated state of todos can be accessed via useEffect
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));

    if (data.length > 0) {
      const hint = document.querySelector(".add-todo-hint") as HTMLDivElement;
      hint.innerText = "Your stuff";
    }
  }, [data]);

  return (
    <div className="App">
      <div className="todo-container">
        <div className="add-todo-hint">Type something to start</div>
        <div className="todos">
          {data.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              remove={removeHandler}
            />
          ))}
        </div>
      </div>
      <div className="add-todo-overlay" onKeyDown={addTodoHandler}>
        <div className="actions-container">
          <div className="actions">
            <div>Add a new to-do</div>
            <input className="todo-input" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

function displayOverlay(enabled: boolean) {
  const overlay = document.querySelector(".add-todo-overlay") as HTMLDivElement;
  const input = document.querySelector(".todo-input") as HTMLInputElement;

  if (enabled) {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "1";
    input.focus();
    return;
  }

  overlay.style.opacity = "0";
  overlay.style.zIndex = "-1";
  input.blur();
}

export default App;
