import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Mainsidebar: false,
};

export const Allslice = createSlice({
  name: "Allslice",
  initialState,
  reducers: {
    AssignMainSideTrue: (state, action) => {
      state.Mainsidebar = !state.Mainsidebar;
    },
  },
});

export const {
  AssignMainSideTrue,
  AssignMainSideFalse
} = Allslice.actions;

export const selectAuth = (state) => state.Authcheck;

export default Allslice.reducer;
