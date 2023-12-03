import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserLogin } from '../../type'

export interface UserState {
  user: UserLogin | null
}

const storedUser = localStorage.getItem('user')
const initialState: UserState = {
  user: storedUser !== null ? JSON.parse(storedUser) : null
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action: PayloadAction<UserLogin | null>) => {
      state.user = action.payload
    },
    clearUserLogin: (state) => {
      state.user = null
    },
    setFavoriteUser: (state, action: PayloadAction<number>) => {
      if (state.user !== null) {
        state.user.favorite.push(action.payload)
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },
    clearFavoriteUser: (state, action: PayloadAction<number>) => {
      if (state.user !== null) {
        const index = state.user.favorite.indexOf(action.payload)
        if (index !== -1) {
          state.user.favorite.splice(index, 1)
          localStorage.setItem('user', JSON.stringify(state.user))
        }
      }
    }
  }
})

export const {
  setUserLogin,
  clearUserLogin,
  setFavoriteUser,
  clearFavoriteUser
} = UserSlice.actions

export default UserSlice.reducer
