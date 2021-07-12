import { createAsyncThunk } from "@reduxjs/toolkit";

import { getOrganizationApiRequest } from "../../apis/organization";
import openNotification from "../../utils/notification";

export const getOrganization = createAsyncThunk(
  "getOrganization",
  async (body, { rejectWithValue }) => {
    try {
      return await getOrganizationApiRequest();
    } catch (e) {
      openNotification(e.message);
      return rejectWithValue(e);
    }
  },
);
