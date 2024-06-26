import { configureStore } from "@reduxjs/toolkit";
import lang_reducer from "../reducers/lang_reducer";
import showCookieReducer from "../reducers/showCookieReducer";
import timesheetReducer from "../reducers/timesheetReducer";
import EmployeeReducer from "../reducers/EmployeeReducer";
import LayoverReducer from "../reducers/LayoverReducer";
import TimeTrackerReducer from "../reducers/TimeTrackerReducer";

export const store = configureStore({
  reducer: {
    lang: lang_reducer,
    showCookieBanner: showCookieReducer,
    timesheet: timesheetReducer,
    timetracker: TimeTrackerReducer, 
    employees: EmployeeReducer,
    layover: LayoverReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;