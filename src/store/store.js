import { configureStore } from "@reduxjs/toolkit"
import test from "./testingSlices/testingSlice"

export const store = configureStore({
  reducer: {
    test: test,
  },
})
