import { configureStore } from '@reduxjs/toolkit'
import CardSliceReducer from './cardSlice'

export const store = configureStore({
  reducer: {
    card:CardSliceReducer
  },
})