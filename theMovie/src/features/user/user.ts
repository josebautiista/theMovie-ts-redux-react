import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserLogin } from '../../type'

export interface UserState {
  user: UserLogin | null
}

const storedUser = localStorage.getItem('user')
const initialState: UserState = {
  user: storedUser ? JSON.parse(storedUser) : null
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action: PayloadAction<UserLogin | null>) => {
      console.log('action.payload', action.payload)
      state.user = action.payload
    },
    clearUserLogin: (state) => {
      state.user = null
    }
  }
})

export const { setUserLogin, clearUserLogin } = UserSlice.actions

export default UserSlice.reducer
