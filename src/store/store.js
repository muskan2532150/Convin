import { configureStore } from '@reduxjs/toolkit';
import CardSliceReducer from './cardSlice';

const store = configureStore({
  reducer: {
    card: CardSliceReducer,
  },
});

export default store;
