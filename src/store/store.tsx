import { configureStore } from "@reduxjs/toolkit";
import objectReducer from "./slices/slices";
import menuReducer from "./slices/menuSlices";

export const store = configureStore({
  reducer: {
    objectStore: objectReducer,
    menu: menuReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
