import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import { planetsApi } from './planetsApi';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
