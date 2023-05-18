import { configureStore } from '@reduxjs/toolkit';
import PostSliceReducer from './cardSlice';
import GroupSliceReducer from './GroupSlice';

const store = configureStore({
  reducer: {
    posts: PostSliceReducer,
    groups: GroupSliceReducer,
  },
});

export default store;
