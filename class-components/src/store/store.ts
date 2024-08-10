import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import { planetsApi } from './planetsApi';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cards: cardsReducer,
      [planetsApi.reducerPath]: planetsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true });
