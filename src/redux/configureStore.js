import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './reducerRedux.js'

export default configureStore({
  reducer: {
    basket: basketReducer
  },
})
