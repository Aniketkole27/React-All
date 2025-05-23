import { createSlice, nanoid, TaskAbortError } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        // text: action.payload.text;
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      // const id = action.payload.id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      // state.todos.map((todo)=>{
      //     if(todo.id === action.payload.id){
      //         todo.text = action.payload.text
      //     }
      // })
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  updateValue,
  status,
  setStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
