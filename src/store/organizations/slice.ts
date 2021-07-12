import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizations: [],
  isFetching: false,
};

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {},
});

export default organizationsSlice.reducer;
