import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../reducer/data.Slice'

export const store = configureStore({
  reducer: {
    item:dataSlice,
  },
})