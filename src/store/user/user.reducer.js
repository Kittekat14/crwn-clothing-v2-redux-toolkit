import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  // that's the alternative to switch-case:
  reducers: {
    // includes the actions:
    setCurrentUser: (state, action) => {
      // under the hood, it uses Immer as dependency and state is not really mutated (it looks like it, but just for readability)
      // the state is brand-new after this below!
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// normal redux reducer
export const userReducerOld = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
