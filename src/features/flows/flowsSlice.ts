import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Id = string;

export type TaskStatus = "todo" | "inProgress" | "onHold" | "done";

export interface Tag {
  text: string;
  color?: string;
}

export interface Task {
  id: Id;
  title: string;
  description?: string;
  status?: TaskStatus;
  subtasks?: string[];
  tags?: Tag[];
  connections?: string[]; // Other cards' ids
}

export interface Flow {
  id: Id;
  title: string;
  description?: string;
  tasks: Task[];
}

const getNewFlowData = (title: string): Flow => {
  return {
    id: crypto.randomUUID(),
    title,
    tasks: [],
  };
};

const getNewTaskData = (title: string): Task => {
  return {
    id: crypto.randomUUID(),
    title,
  };
};

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
    createFlow: (state, { payload: title }: PayloadAction<string>) => {
      state.flows.push(getNewFlowData(title));
    },
    removeFlow: (state, { payload: flowId }: PayloadAction<string>) => {
      state.flows = state.flows.filter((flow) => flow.id !== flowId);
    },
    createTask: (
      state,
      {
        payload: { flowId, title },
      }: PayloadAction<{ flowId: Id; title: string }>,
    ) => {
      const flow = state.flows.find((flow) => flow.id === flowId);
      if (flow) {
        flow.tasks.push(getNewTaskData(title));
      }
    },
    removeTask: (
      state,
      {
        payload: { flowId, taskId },
      }: PayloadAction<{ flowId: Id; taskId: Id }>,
    ) => {
      const flow = state.flows.find((flow) => flow.id === flowId);
      if (flow) {
        flow.tasks = flow.tasks.filter((task) => task.id !== taskId);
      }
    },
  },
});

export const { createFlow, removeFlow, createTask, removeTask } =
  flowsSlice.actions;

export default flowsSlice.reducer;
