import React, { useState } from "react";
import TodoRdx from "./TodoRdx";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, setTodos } from "./todosSlice";
import Filters from "./Filters";

function Todos() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  const handeChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTodos({ text: value, id: uuid(), completed: false }));
    setValue("");
  };

  return (
    <div className="Counter">
      To do List Redux Toolkit
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handeChange} />
        <button>Add to do</button>
      </form>
      {todos.map((todo) => {
        return (
          <TodoRdx
            text={todo.text}
            key={todo.id}
            id={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            completed={todo.completed}
          />
        );
      })}
      <Filters />
    </div>
  );
}

export default Todos;
