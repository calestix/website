import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: "Home",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = menuSlice.actions;
export default menuSlice.reducer;
