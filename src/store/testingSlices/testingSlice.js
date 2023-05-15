import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "./testingActions"

const initialState = {
  value: 0,
  list: [],
  status: "",
}

export const testingSlice = createSlice({
  name: "TESTING",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading"
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = "success"
    },
    [getUsers.rejected]: (state) => {
      state.status = "failed"
    },
  },
})

export const { increment, decrement } = testingSlice.actions

export default testingSlice.reducer
