import React from "react";
import styled from "styled-components";

function Todo({ text, todo, setTodos, todos }) {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo));
  };

  return (
    <Style>
      {text}
      <button onClick={handleDelete}>Delete To-do</button>
    </Style>
  );
}

export default Todo;

const Style = styled.div`
  padding: 3px;
  button {
    margin-left: 20px;
  }
`;
