import { configureStore } from "@reduxjs/toolkit";
import flowsReducer from "../features/flows/flowsSlice";

export const store = configureStore({
  reducer: {
    flowsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
