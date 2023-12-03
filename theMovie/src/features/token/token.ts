import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TokenState {
  token: string | null
}

const storedToken = localStorage.getItem('tokenMovie')
const initialState: TokenState = storedToken !== null
  ? { token: storedToken }
  : { token: null }

export const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    clearToken: (state) => {
      state.token = null
    }
  }
})

export const { setToken, clearToken } = TokenSlice.actions

export default TokenSlice.reducer
