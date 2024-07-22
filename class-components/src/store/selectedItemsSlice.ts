import { createSlice } from '@reduxjs/toolkit';

export type SelectedItemsState = string[];
const initialState: SelectedItemsState = [];

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem(state, action) {
      state.push(action.payload.item);
    },
    unselectItem(state, action) {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { selectItem, unselectItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
