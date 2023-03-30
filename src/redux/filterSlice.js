import { createSlice } from '@reduxjs/toolkit'
export const filterSlice = createSlice({
  name: 'contact',
  initialState:"",
  reducers: {
    updateFilter: (state, action) => {
    
      return state = action.payload
    },
  },
})
export const { updateFilter } = filterSlice.actions
