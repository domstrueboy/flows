import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TaskStatus = "todo" | "inProgress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: string[];
  tags: string[];
  links: string[]; // Other cards' ids
}

export interface Flow {
  id: string;
  title: string;
  description: string;
  status: string;
  tasks: Task[];
}

export interface FlowsState {
  flows: Flow[];
}

const initialState: FlowsState = {
  flows: [],
};

export const flowsSlice = createSlice({
  name: "flows",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = flowsSlice.actions;

export default flowsSlice.reducer;
