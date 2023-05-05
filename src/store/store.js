import { configureStore } from '@reduxjs/toolkit';
import PostSliceReducer from './cardSlice';

const store = configureStore({
  reducer: {
    posts: PostSliceReducer,
  },
});

export default store;
