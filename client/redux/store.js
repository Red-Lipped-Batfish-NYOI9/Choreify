import { configureStore } from "@reduxjs/toolkit";
import choresReducer from "./slices/choresSlice";
import { choresApi } from "./api/chores/choresApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    chores: choresReducer,
    [choresApi.reducerPath]: choresApi.reducer, // Add the generated reducer as a specific top-level slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(choresApi.middleware),
});

setupListeners(store.dispatch);
