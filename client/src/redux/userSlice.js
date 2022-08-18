import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  loading:false,
  error:false,

}

export const userSlice = userSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.loading = true
      state.user=action.payload
    },
    loginFailure: (state) => {
      state.loading = true
    },
  },
})