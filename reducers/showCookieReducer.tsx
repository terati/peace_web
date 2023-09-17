import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const showCookieBanner = createSlice({
  name: 'cookieBanner',
  initialState: true,
  reducers: {
    cookieBannerToggle(state) {
      return state=!state;
    }
  }
})


export const { cookieBannerToggle } = showCookieBanner.actions;
export default showCookieBanner.reducer; 