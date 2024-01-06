import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { choresApi } from "./services/pokemon";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [choresApi.reducerPath]: choresApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(choresApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// To setup hooks in component the docs are here: https://redux-toolkit.js.org/rtk-query/overview#use-hooks-in-components
