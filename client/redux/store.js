import { configureStore } from "@reduxjs/toolkit";
import choresReducer from "./slices/choresSlice";
import groupsReducer from "./slices/groupsSlice";
import { choresApi } from "./api/chores/choresApi";
import { groupsApi } from "./api/groups/groupsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    chores: choresReducer,
    [choresApi.reducerPath]: choresApi.reducer, // Add the generated reducer as a specific top-level slice
    groups: groupsReducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([choresApi.middleware, groupsApi.middleware])
});

setupListeners(store.dispatch);
