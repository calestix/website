import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {}, // This will store any dynamic object
};

export const objectSlice = createSlice({
  name: "objectStore",
  initialState,
  reducers: {
    setObject: (state, action) => {
      state.data = action.payload; 
    },
    updateObject: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    clearObject: (state) => {
      state.data = {};
    },
  },
});

export const { setObject, updateObject, clearObject } = objectSlice.actions;
export default objectSlice.reducer;
