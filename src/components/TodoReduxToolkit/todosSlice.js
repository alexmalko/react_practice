import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      // {
      //   id: uuid(),
      //   text: "Learn React",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   text: "Learn Redux",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   text: "Learn Redux-ToolKit",
      //   completed: false,
      // },
    ],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos.push(action.payload);

      // to check it out
      console.log("action: ", action.payload.text);
      console.log("state ", state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log(action.payload);
    },
    // action.payload return whatever was passed into the action as a parameter
    toggleCompleted: (state, action) => {
      const todoToEdit = state.todos.find((todo) => todo.id === action.payload);
      // console.log("inisde toggleCompleted: ", todoToEdit);
      console.log(todoToEdit);
      todoToEdit.completed = !todoToEdit.completed;
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToEdit.text = action.payload.text;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTodos,
  deleteTodo,
  toggleCompleted,
  editTodo,
} = todosSlice.actions;

// can be imported at the component level directly
export const selectTodo = (state) => state.todo.todos;

export default todosSlice.reducer;
