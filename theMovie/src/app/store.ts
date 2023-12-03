import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movies'
import tokenReducer from '../features/token/token'
import userReducer from '../features/user/user'
import ratedReducer from '../features/movies/rated'
import upcomingReducer from '../features/movies/upcoming'
import favoriteReducer from '../features/movies/favorite'

const store = configureStore({
  reducer: {
    movies: movieReducer,
    token: tokenReducer,
    user: userReducer,
    rated: ratedReducer,
    upcoming: upcomingReducer,
    favorite: favoriteReducer
  }
})

export default store
