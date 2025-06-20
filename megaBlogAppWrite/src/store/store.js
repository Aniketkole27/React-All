import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./authSlice";
const store = configureStore({
  reducer: todoSlice,
});

export default store;
