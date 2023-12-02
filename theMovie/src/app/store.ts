import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movies'
import tokenReducer from '../features/token/token'
import userReducer from '../features/user/user'

const store = configureStore({
  reducer: {
    movies: movieReducer,
    token: tokenReducer,
    user: userReducer
  }
})

export default store
