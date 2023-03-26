import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

function App() {
  const [todos, setTodos] = useState<JSX.Element[]>([]);

  const addTodo = (e: React.SyntheticEvent) => {
    const input = document.querySelector(".to-do-input") as HTMLInputElement;

    if (!input.value) {
      return;
    }

    // add new cmp
    const newCmp = (
      <Todo key={todos.length} text={input.value} todos={[todos, setTodos]} />
    );
    setTodos(todos.concat(newCmp));

    input.value = "";
  };

  const addTodoHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(e);
    }
  };

  const removeAllHandler = (e: React.KeyboardEvent) => {
    return;

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
          onKeyDown={addTodoHandler}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-container">{todos}</div>
    </div>
  );
}

export default App;
