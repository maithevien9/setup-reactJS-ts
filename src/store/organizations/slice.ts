import { createSlice } from "@reduxjs/toolkit";
import { getOrganization } from "./action";

const initialState = {
  organizations: [],
  isFetching: false,
};

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOrganization.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getOrganization.fulfilled, (state: any, { payload }) => {
      state.organizations = payload;
      state.isFetching = false;
    });
    builder.addCase(getOrganization.rejected, (state) => {
      state.isFetching = false;
    });
  },
});

export default organizationsSlice.reducer;
