import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uncontrolled: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
  },
  controlled: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitUncontrolled(state, action) {
      state.uncontrolled = action.payload;
    },
    submitControlled(state, action) {
      state.controlled = action.payload;
    },
  },
});

export const { submitUncontrolled, submitControlled } = formSlice.actions;
export default formSlice.reducer;
