import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSet = new Set(['timesheet', 'reports', 'settings', 'messages', 'employees', 'label']);

const timeSheetInitialData = {
  section : 'timesheet'
}

const timesheetSlice = createSlice({
  name: 'timesheetData',
  initialState: timeSheetInitialData,
  reducers: {
    togglePage(state, action: PayloadAction<string>) {
      let page = action.payload;
      if (!pageSet.has(page)) {
        state.section= 'timesheet'
      } else {
        state.section = page;
      }
    },
    
  }
})

export const { togglePage } = timesheetSlice.actions;
export default timesheetSlice.reducer; 