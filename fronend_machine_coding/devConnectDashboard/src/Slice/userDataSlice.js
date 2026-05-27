import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: null,
};

const userDataSlice = createSlice({
  name: "userdata",
  initialState,

  reducers: {
    set(state, action) {
      state.open = true;
      state.data = action.payload;
    },

    close(state) {
      state.open = false;
    },
  },
});

export const { set, close } = userDataSlice.actions;

export default userDataSlice.reducer;