import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const inialState: language_interface {
//   value 
// }

let dt: {[key: string]: string} = {
  'zh' : 'zh',
  'en' : 'en',
  'english' : 'en',
  'chinese' : 'zh'
}

const langSlice = createSlice({
  name: 'lang',
  initialState: 'zh',
  reducers: {
    lang_toggle(state) {
      // console.log('toggle');
      if (state == 'zh') {
        return (state = 'en');
      } else if (state == 'en') {
        return (state = 'zh');
      }
    },
    store_set_lang_state(state, action: PayloadAction<string>) {
      if (dt[action.payload]) {
        return (state = dt[action.payload])
      }
    }
  }
})

export const { lang_toggle, store_set_lang_state } = langSlice.actions;
export default langSlice.reducer; 