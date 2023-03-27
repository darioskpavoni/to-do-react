import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

function App() {
  const [todos, setTodos] = useState<JSX.Element[]>(() => {
    return [];

    // Find out a way to render the todos from the local storage

    const localStorageTodos = localStorage.getItem("todos") as string;

    if (!localStorageTodos) return [];

    let restoredTodos: JSX.Element[] = [];
    (JSON.parse(localStorageTodos) as JSX.Element[]).forEach((todo) => {
      restoredTodos = restoredTodos.concat(todo);
    });

    console.log(`RESTORED TODOS`);
    console.log(restoredTodos);

    return restoredTodos;
  });

  // updated state of todos can be accessed via useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);

    if (todos.length > 0) {
      const hint = document.querySelector(".add-todo-hint") as HTMLDivElement;
      hint.innerText = "Your stuff";
    }

    // This handler enables the global overlay for adding a new to-do
    const globalKeyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        return;
      }

      setOverlay(true);

      // ESC -> Remove overlay
      if (e.key === "Escape") {
        setOverlay(false);
      }
    };

    // Global key event listener
    document.addEventListener("keydown", globalKeyDownHandler);

    // This part avoids the duplication of every caught keydown event
    return () => {
      document.removeEventListener("keydown", globalKeyDownHandler);
    };
  }, [todos]);

  const addTodoHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = document.querySelector(".todo-input") as HTMLInputElement;

      if (!input.value) {
        return;
      }

      const id = Date.now().toString();

      const removeHandler = (id: string) => {
        console.log(`Deleting ${id}`);
        setTodos((todos) => todos.filter((todo) => todo.props.id !== id));
      };

      // add new todo
      const todo = (
        <Todo key={id} id={id} text={input.value} remove={removeHandler} />
      );
      setTodos(todos.concat(todo));

      input.value = "";
      setOverlay(false);
    }
  };

  return (
    <div className="App">
      <div className="todo-container">
        <div className="add-todo-hint">Type something to start</div>
        <div className="todos">{todos}</div>
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

function setOverlay(enabled: boolean) {
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
