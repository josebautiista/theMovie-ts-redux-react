import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Movie } from '../../type.d'

export interface upcomingState {
  upcoming: Movie
}

const initialState: Movie = []

export const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {
    setupcoming: (state, action: PayloadAction<Movie>) => {
      state.splice(0, state.length)
      state.push(...action.payload)
    }
  }
})

export const { setupcoming } = upcomingSlice.actions

export default upcomingSlice.reducer
