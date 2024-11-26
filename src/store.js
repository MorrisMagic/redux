import { configureStore, createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) task.description = description;
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
  },
});

export const { addTask, editTask, toggleTask } = tasksSlice.actions;

const store = configureStore({ reducer: { tasks: tasksSlice.reducer } });

export default store;
