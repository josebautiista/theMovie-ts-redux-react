import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type movie, type Movie } from '../../type.d'

export interface FavoriteState {
  favorites: Movie
}

const initialState: FavoriteState = {
  favorites: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<movie>) => {
      state.favorites.splice(0, state.length)
      state.favorites = [...state.favorites, action.payload]
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      const index = state.favorites.findIndex(
        (movie) => movie.id === action.payload
      )
      if (index !== -1) {
        state.favorites.splice(index, 1)
      }
    }
  }
})

export const { setFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
