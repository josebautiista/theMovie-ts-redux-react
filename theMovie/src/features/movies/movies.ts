import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Movie } from '../../type.d'

export interface MoviesState {
  movies: Movie
}

const initialState: Movie = []

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie>) => {
      state.push(...action.payload)
    }
  }
})

export const { setMovies } = MoviesSlice.actions

export default MoviesSlice.reducer
