import { configureStore } from "@reduxjs/toolkit";
import choresReducer from "./slices/choresSlice";

export default configureStore({
  reducer: {
    chores: choresReducer,
  },
});
