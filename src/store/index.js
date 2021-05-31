import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import suggestionsSlice from './suggestionsSlice'
import userSlice from './userSlice'


const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    user: userSlice.reducer,
    suggestions: suggestionsSlice.reducer
  }
})

export default store