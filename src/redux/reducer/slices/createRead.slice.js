import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: ['Add first element'],
  error: null,
};

const  createReadSlice = createSlice({
  name: "createRead",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todo.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = createReadSlice.actions;

export default createReadSlice;

 