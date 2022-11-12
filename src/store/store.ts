import { configureStore } from '@reduxjs/toolkit'
import AviaReducer from "./slices/AviaSlice"
export const store = configureStore({
  reducer: {
    'avia': AviaReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch