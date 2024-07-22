import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];
type actionType = {
  payload: Record<string, string>;
  type: string;
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem(state, action: actionType) {
      state.push(action.payload.item);
    },
    unselectItem(state, action: actionType) {
      return state.filter((item) => item !== action.payload.item);
    },
  },
});

export const { selectItem, unselectItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
