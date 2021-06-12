import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

function Todos() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handeChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: value, id: uuid() }]);
    setValue("");
  };

  return (
    <div className="Counter">
      To do List Regular
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handeChange} />
        <button>Add to do</button>
      </form>
      {todos.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          id={todo.id}
          todo={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default Todos;
