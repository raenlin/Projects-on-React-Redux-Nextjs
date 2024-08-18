import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uncontrolled: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirm_password: '',
    country: '',
    gender: '',
    image: '',
  },
  controlled: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirm_password: '',
    country: '',
    gender: '',
    image: '',
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
    setControlledImage(state, action) {
      state.controlled.image = action.payload;
    },
    setUncontrolledImage(state, action) {
      state.uncontrolled.image = action.payload;
    },
  },
});

export const { submitUncontrolled, submitControlled, setControlledImage, setUncontrolledImage } =
  formSlice.actions;
export default formSlice.reducer;
