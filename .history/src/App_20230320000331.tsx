import { useState } from "react";
import "./App.css";

function App() {
  const addTodo = (e: React.SyntheticEvent) => {
    const text = document.querySelector(".to-do-input");
    console.log(text);
  };

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
