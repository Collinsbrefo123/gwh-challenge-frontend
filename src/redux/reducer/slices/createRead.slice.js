import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  error: null,
};

const createReadSlice = createSlice({
  name: "createRead",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
      state.error = null;
    },
    addTodos: (state, action) => {
      state.todo = action.payload;
    },
    removeTodo: (state, action) => {
      state.todo.filter((_, index) => index !== action.payload);
    },
  },
  //   extraReducers: (builder) =>
  //     builder
  //       .addCase(addTodo.fulfilled, (state, action) => {
  //         state.todo.push(action.payload);
  //         state.error = null;
  //       })
  //       .addCase(addTodo.pending, (state, action) => {
  //         state.error = null;
  //       })
  //       .addCase(addTodo.rejected, (state, action) => {
  //         state.error = null;
  //       }),
});

export const { addTodo, addTodos, removeTodo } = createReadSlice.actions;

export default createReadSlice;
