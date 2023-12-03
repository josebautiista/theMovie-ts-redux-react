import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Movie } from '../../type.d'

export interface RatedState {
  rated: Movie
}

const initialState: Movie = []

export const RatedSlice = createSlice({
  name: 'rated',
  initialState,
  reducers: {
    setRated: (state, action: PayloadAction<Movie>) => {
      state.splice(0, state.length)
      state.push(...action.payload)
    }
  }
})

export const { setRated } = RatedSlice.actions

export default RatedSlice.reducer
