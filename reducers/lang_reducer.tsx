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
  initialState: 'en',
  reducers: {
    lang_toggle(state) {
      // console.log('toggle');
      if (state == 'zh') {
        return (state = 'en');
      } else if (state == 'en') {
        return (state = 'zh');
      }
    },
    setLang(state, action: PayloadAction<string>) {
      // console.log('lang_set');
      if (dt[action.payload]) {
        return (state = dt[action.payload])
      }
    }
  }
})

export const { lang_toggle, setLang } = langSlice.actions;
export default langSlice.reducer; 