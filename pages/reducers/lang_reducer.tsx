import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: 'lang',
  initialState: 'zh',
  reducers: {
    lang_toggle(state) {
      console.log('toggle');
      if (state == 'zh') {
        return (state = 'en');
      } else if (state == 'en') {
        return (state = 'zh');
      }
    }
  }
})

export const { lang_toggle } = langSlice.actions;
export default langSlice.reducer; 