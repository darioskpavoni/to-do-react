import { useState } from "react";
import "./App.css";

function App() {
  const addTodo = (e: EventTarget) => {};

  return (
    <div className="App">
      <h1>A very simple To-Do app with React</h1>
      <div className="actions">
        <input className="to-do-input" type={"text"} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
