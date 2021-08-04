import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
    blablabla: 'blablabla'
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    all: (state, action) => { state.blablabla = action.payload; }
  }
});
