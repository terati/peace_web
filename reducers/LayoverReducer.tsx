import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoverSliceInterface {
  open: boolean;
  type?: 'addEmployee' | 'editEmployee' | 'removeEmployee'
  | 'addEvent' | 'editEvent' | 'removeEvent' | 'confirmDeleteEvent';
}

const initialState: LayoverSliceInterface = {
  open: false,
  type: 'addEmployee'
}

const LayoverSlice = createSlice({
  name: 'layover',
  initialState,
  reducers: {
    openLayover(state) { state.open = true; },
    closeLayover(state) { state.open = false; },
    transitionLayoverSection(state, action) { state.type = action.payload; }, 
  }

}); 

export const { openLayover, closeLayover, transitionLayoverSection } = LayoverSlice.actions;
export default LayoverSlice.reducer; 