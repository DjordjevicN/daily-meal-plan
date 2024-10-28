import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppControlState {
  editMealForm: boolean;
}

const initialState: AppControlState = {
  editMealForm: false,
};

export const appControlSlice = createSlice({
  name: "appControl",
  initialState,
  reducers: {
    editMealForm: (state, action: PayloadAction<boolean>) => {
      state.editMealForm = action.payload;
    },
  },
});

export const { editMealForm } = appControlSlice.actions;

export default appControlSlice.reducer;
