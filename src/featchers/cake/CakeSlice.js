import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfCake--;
    },
    reStoced: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, reStoced } = cakeSlice.actions;
