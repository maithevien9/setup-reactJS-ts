import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../combineReducers";
import { login } from "./actions";
import { IAuthState } from "./types";

const initialState: IAuthState = {
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
    builder.addCase(login.pending, (state: IAuthState): void => {
      state.isSubmitting = true;
    });
    builder.addCase(login.fulfilled, (state: IAuthState, { payload }): void => {
      const { user, accessToken } = payload;
      state.user = user;
      state.token = accessToken;
      state.isSubmitting = false;
    });
    builder.addCase(login.rejected, (state: IAuthState): void => {
      state.isSubmitting = false;
    });
  },
});

export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
