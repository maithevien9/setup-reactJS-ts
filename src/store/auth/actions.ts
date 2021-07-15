import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginApiRequest } from "../../apis/auth";
import openNotification from "../../utils/notification";
import { ILoginRequestPayload, ILoginResponsePayload } from "./types";

export const login = createAsyncThunk<
  ILoginResponsePayload,
  ILoginRequestPayload
>("login", async (body, { rejectWithValue }) => {
  try {
    const { email, password } = body;
    return await loginApiRequest(email, password);
  } catch (e) {
    openNotification(e.message);
    return rejectWithValue(e);
  }
});
