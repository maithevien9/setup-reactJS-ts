import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";

interface User {
  gender: number;
  isOnline: boolean;
  role: number;
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface AuthState {
  user: User;
  token: string;
  isSubmitting: boolean;
}

const initialState: AuthState = {
  user: {
    gender: 0,
    isOnline: false,
    role: 0,
    _id: "",
    firstName: "",
    lastName: "",
    avatar: "",
  },
  token: "",
  isSubmitting: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: AuthState): void => {
      state.isSubmitting = true;
    });
    builder.addCase(login.fulfilled, (state: AuthState, { payload }): void => {
      const { user, accessToken } = payload;
      state.user = user;
      state.token = accessToken;
      state.isSubmitting = false;
    });
    builder.addCase(login.rejected, (state: AuthState): void => {
      state.isSubmitting = false;
    });
  },
});

export default authSlice.reducer;
