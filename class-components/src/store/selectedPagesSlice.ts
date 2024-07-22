import { createSlice } from '@reduxjs/toolkit';
import { Planet } from '../utils/types';

const initialState: Planet[] = [];
type ActionType = {
  payload: Planet[];
  type: string;
};

const selectedPagesSlice = createSlice({
  name: 'selectedPages',
  initialState,
  reducers: {
    selectItem(state, action: ActionType) {
      state.push(...action.payload);
    },
  },
});

export const { selectItem } = selectedPagesSlice.actions;
export default selectedPagesSlice.reducer;
