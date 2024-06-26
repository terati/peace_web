import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; 
import { addEventAsync, createEventAsync, getEventsAsync } from "./TimeTrackerAsync";

export interface TimeEventInterface {
  event_id?: string;
  employee_id?: string;
  employee_name?: string;
  employee_category?: string; 
  creator_id?: string;
  creator_name?: string;
  creator_category?: string;
  start_time?: string;
  end_time?: string;
  start_date?: string;
  creation_date?: string;
  edited_date?: string;
  note?: string;
}

export interface formattedEventsInterface {
  [key: string] : TimeEventInterface[];
}

const todaysDateFormatted = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth()+1).toString().padStart(2,'0');
  let day = today.getDate().toString().padStart(2,'0');
  let formattedDate = year + month + day;
  return formattedDate; 
}

export const defaultEvent = {
  event_id: '', 
  employee_id: '',
  employee_name: '',
  employee_category: '', 
  creator_id: 'uh',
  creator_name: '',
  creator_category: '',
  start_time: '',
  end_time: '',
  start_date: todaysDateFormatted(),
  creation_date: '',
  edited_date: '',
  note: '',
}

type KeyValueEventType = {
  [key: string] : TimeEventInterface[]; 
}

interface AddEventActionInterface extends Omit<TimeEventInterface, 'uid'> {}

interface DeleteEventActionInterface extends Pick<TimeEventInterface, 'event_id' | 'start_date'> {}

interface EditEventActionInterface extends Required<Pick<TimeEventInterface, 'event_id'> & Partial<TimeEventInterface>> {}

const initialState = {
  events: [] as TimeEventInterface[], // as recieved from api
  formattedEvents: { }, // as reformmateed
  startDate: '', // inclusive
  endDate: '', // inclusive
  currentTimeEvent: defaultEvent as TimeEventInterface,
  signal: '',
}

interface TimeTrackerStateInterface {
  events: TimeEventInterface[];
  formattedEvents: KeyValueEventType;
  startDate: string;
  endDate: string;
  currentTimeEvent: TimeEventInterface;
  signal: string;
}

const TimeTrackerSlice = createSlice({
  name: 'timetracker',
  initialState,
  reducers: {
    // add time event for an employee
    createEvent(state:TimeTrackerStateInterface, action: PayloadAction<AddEventActionInterface>) {
      let eventId = uuidv4(); 
      let event:TimeEventInterface = { ...action.payload };
      state.events.push(event);
      let formattedEventKey = action.payload.start_date + action.payload.employee_id;
      if (state.formattedEvents[formattedEventKey]==undefined) {
        state.formattedEvents[formattedEventKey] = [event]; 
      } else {
        state.formattedEvents[formattedEventKey].push(event); 
      }
      createEventAsync(); // asynchronously add the event
    },
    // delete time event for an employee
    removeEvent(state:TimeTrackerStateInterface, action: PayloadAction<DeleteEventActionInterface>) {
      let payload = action.payload;
      let previousFormattedEventKey = state.currentTimeEvent.start_date.split('-').join('') + state.currentTimeEvent.employee_id;
      console.log(previousFormattedEventKey);
      state.formattedEvents[previousFormattedEventKey] = state.formattedEvents[previousFormattedEventKey].filter((timeEvent:TimeEventInterface) => timeEvent.event_id!=payload.event_id); 
    },
    editEvent(state:TimeTrackerStateInterface, action: PayloadAction<EditEventActionInterface>) {
      // if an attribute has changed, just save attribute.
      // if the date, or employee changed, you would have to update the formattedEvents
      let payload = action.payload;
      for (let timeEvent of state.events) {
        if (timeEvent.event_id==payload.event_id) {
          for (let key in payload) {
            if (timeEvent.hasOwnProperty(key)) timeEvent[key] = payload[key];
          }
          continue;
        }
      }
      let previousFormattedEventKey = state.currentTimeEvent.start_date.split('-').join('') + state.currentTimeEvent.employee_id; 
      let newFormattedEventKey = payload.start_date.split('-').join('') + payload.employee_id;
      state.formattedEvents[previousFormattedEventKey] = state.formattedEvents[previousFormattedEventKey].filter((timeEvent:TimeEventInterface) => timeEvent.event_id!=payload.event_id); 
      if (state.formattedEvents.hasOwnProperty(newFormattedEventKey)) {
        state.formattedEvents[newFormattedEventKey].push(payload);
      } else {
        state.formattedEvents[newFormattedEventKey] = [payload]; 
      }
      
    },
    clearCurrentTimeEvent(state:TimeTrackerStateInterface) {
      state.currentTimeEvent = defaultEvent; 
    },
    focusCurrentTimeEvent(state:TimeTrackerStateInterface, action: PayloadAction<string>) {
      console.log(action.payload);
      for (let key in action.payload) {
        if (state.currentTimeEvent.hasOwnProperty(key)) state.currentTimeEvent[key] = action.payload[key];
      }
    },
    setSignal(state:TimeTrackerStateInterface, action: PayloadAction<string>) {
      state.signal = action.payload; 
    },
    clearSignal(state:TimeTrackerStateInterface) {
      state.signal = ''; 
    },
    generateReport() {},
    saveReport() {},
    listReports() {},
    deleteReport() {},

  }, 
  extraReducers: (builder) => {
    builder.addCase(createEventAsync.pending, (state, action) => {

    }), 
    builder.addCase(createEventAsync.fulfilled, (state, action) => {

    }),
    builder.addCase(createEventAsync.rejected, (state, action) => {

    }),
    builder.addCase(getEventsAsync.fulfilled, (state, action) => {
      state.events = action.payload;
      state.formattedEvents = formatEvents(action.payload);
    })
  }
})

const formatEvents = (events: EventInterface[]) => {
  let ret:formattedEventsInterface = {};
  for (let event of events) {
    if (event.start_date==undefined) continue; 
    let key = event.start_date.split('-').join('') + event.employee_id;
    if (ret.hasOwnProperty(key)) {
      ret[key].push(event);
    } else {
      ret[key] = [event];
    }
  }
  return ret; 
}

export const { createEvent, removeEvent, editEvent, clearCurrentTimeEvent, 
  clearSignal, setSignal, focusCurrentTimeEvent,
} = TimeTrackerSlice.actions;
export default TimeTrackerSlice.reducer; 