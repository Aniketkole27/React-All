import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/Todo/todoSlice";

export const store = configureStore({
  reducer: todoSlice,
});
