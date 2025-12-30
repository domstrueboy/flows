import { configureStore } from "@reduxjs/toolkit";
import flowsReducer from "@/_features/flows/store/flows-slice";

export const store = configureStore({
  reducer: {
    flowsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
