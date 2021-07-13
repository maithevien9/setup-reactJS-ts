import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginApiRequest } from "../../apis/auth";
import openNotification from "../../utils/notification";

export const login = createAsyncThunk(
  "login",
  async (body: any, { rejectWithValue }) => {
    try {
      const { email, password } = body;
      return await loginApiRequest(email, password);
    } catch (e) {
      openNotification(e.message);
      return rejectWithValue(e);
    }
  },
);
