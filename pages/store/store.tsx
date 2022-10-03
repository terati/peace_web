import { configureStore } from "@reduxjs/toolkit";
import lang_reducer from "../reducers/lang_reducer";

export const store = configureStore({
  reducer: {
    lang: lang_reducer,
  }
})