import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  age?: number;
}

interface UserState {
  isLogged: boolean;
  user: User | null;
  age: number;
}

const initialState: UserState = {
  isLogged: false,
  user: null,
  age: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
