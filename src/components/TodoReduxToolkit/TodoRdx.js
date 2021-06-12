import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted, editTodo } from "./todosSlice";

function Todo({ text, id, completed }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState("");
  const inputRef = useRef(null);

  const handleEditInputChange = (e) => {
    setEditTodoInput(e.target.value);
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleCompleted = () => {
    dispatch(toggleCompleted(id));
    console.log(text);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
    setEditTodoInput(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editTodoInput, id: id }));
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    if (isEditMode) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  return (
    <Style>
      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            onChange={handleEditInputChange}
            value={editTodoInput}
          />
        </form>
      ) : (
        <>
          <div style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text}
          </div>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete To-Do</button>
      <button onClick={handleCompleted}>Toggle Completed</button>
    </Style>
  );
}

export default Todo;

const Style = styled.div`
  padding: 3px;
  display: flex;
  > div {
    width: 15rem;
  }
  > form > input {
    width: 15rem;
  }
  button {
    margin-left: 20px;
  }
`;
