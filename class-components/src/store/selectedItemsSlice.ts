import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, string>[] = [];
type ActionType = {
  payload: Record<string, string>;
  type: string;
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem(state, action: ActionType) {
      state.push(action.payload);
    },
    unselectItem(state, action: ActionType) {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { selectItem, unselectItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
