import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";

export type Todo = {
  id: string;
  todo: JSX.Element;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.SyntheticEvent) => {
    const input = document.querySelector(".to-do-input") as HTMLInputElement;

    if (!input.value) {
      return;
    }

    // identified for new todo
    const id = Date.now().toString();

    const removeHandler = () => {
      // console.log(`Removing todo #${id}`);
      // console.log(todos);
    };

    // add new cmp
    const newTodo = <Todo key={id} text={input.value} remove={removeHandler} />;
    setTodos(new Map(todos.set(id, newTodo)));

    input.value = "";
  };

  const addTodoHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(e);
    }
  };

  const removeAllHandler = (e: React.KeyboardEvent) => {
    return;

    // if (e.key === "Backspace") {
    //   setTodos(todos.set(new Map()));
    // }
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
      <div className="todo-container"></div>
    </div>
  );
}

export default App;
