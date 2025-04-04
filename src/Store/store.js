import { configureStore } from '@reduxjs/toolkit'
import TODOReducer from '../Features/TODOslice'

export const store = configureStore({
  reducer: {
    TODO: TODOReducer,
  },
})