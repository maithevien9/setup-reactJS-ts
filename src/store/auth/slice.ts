import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";
import { authState } from "../../constants/interface";

const initialState: authState = {
  user: {},
  token: "",
  isSubmitting: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: authState): void => {
      state.isSubmitting = true;
    });
    builder.addCase(login.fulfilled, (state: authState, { payload }): void => {
      const { user, accessToken } = payload;
      state.user = user;
      state.token = accessToken;
      state.isSubmitting = false;
    });
    builder.addCase(login.rejected, (state: authState): void => {
      state.isSubmitting = false;
    });
  },
});

export default authSlice.reducer;
