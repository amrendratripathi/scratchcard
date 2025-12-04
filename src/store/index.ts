import { configureStore } from '@reduxjs/toolkit';
import scratchCardReducer from './scratchCardSlice';

export const store = configureStore({
  reducer: {
    scratchCard: scratchCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
