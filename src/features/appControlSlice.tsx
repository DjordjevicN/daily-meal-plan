import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppControlState {
  mealFormData: any;
}

const initialState: AppControlState = {
  mealFormData: null,
};

export const appControlSlice = createSlice({
  name: "appControl",
  initialState,
  reducers: {
    editRecipeFormData: (state, action: PayloadAction<any>) => {
      state.mealFormData = action.payload;
    },
  },
});

export const { editRecipeFormData } = appControlSlice.actions;

export default appControlSlice.reducer;
