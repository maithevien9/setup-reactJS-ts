import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginApiRequest } from "../../apis/auth";
import openNotification from "../../utils/notification";
import { FormDataLogin } from "../../models/index";

export const login = createAsyncThunk(
  "login",
  async (body: FormDataLogin, { rejectWithValue }) => {
    try {
      const { email, password } = body;
      return await loginApiRequest(email, password);
    } catch (e) {
      openNotification(e.message);
      return rejectWithValue(e);
    }
  },
);
