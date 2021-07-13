import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";

const initialState = {
  user: {},
  token: null,
  isSubmitting: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: any): void => {
      state.isSubmitting = true;
    });
    builder.addCase(login.fulfilled, (state: any, { payload }): void => {
      const { user, accessToken } = payload;
      state.user = user;
      state.token = accessToken;
      state.isSubmitting = false;
    });
    builder.addCase(login.rejected, (state: any): void => {
      state.isSubmitting = false;
    });
  },
});

export default authSlice.reducer;
