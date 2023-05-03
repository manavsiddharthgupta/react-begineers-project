import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialcounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthentication: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

const reduxStore = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const reduxAuthDispatch = authSlice.actions;

export const reduxcounterDispatch = counterSlice.actions;

export default reduxStore;
