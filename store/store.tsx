import { configureStore } from "@reduxjs/toolkit";
import lang_reducer from "../reducers/lang_reducer";

export const store = configureStore({
  reducer: {
    lang: lang_reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch