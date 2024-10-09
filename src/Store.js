import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/ReduxSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
})