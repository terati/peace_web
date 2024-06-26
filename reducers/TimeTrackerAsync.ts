import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'; 
import { createEvent, editEvent, removeEvent } from "./TimeTrackerReducer";


export const getEventsAsync = createAsyncThunk(
  'data/getEventsAsync',
  async (_, { dispatch }) => {
    try {
      const res = await axios.get('/api/events');
      console.log(res);
      return res.data; 
    } catch (error) {
      console.error('Error get resource', error);
    }

  }
)

export const createEventAsync = createAsyncThunk(
  'data/createEventAsync',
  async (timeEventData, { dispatch }) => {
    let eventId = uuidv4(); 
    timeEventData = {...timeEventData, event_id:eventId}; 
    dispatch(createEvent(timeEventData));
    console.log(timeEventData);
    try {
      const res = await axios.put('/api/events', {...timeEventData});
    } catch (error) {
      console.error('Error creating employee', error);
    }
  }
)

export const removeEventAsync = createAsyncThunk(
  'data/removeEventAsync',
  async (timeEventData, { dispatch }) => {
    dispatch(removeEvent(timeEventData));
    console.log({...timeEventData});
    try {
      const res = await axios.delete('/api/events', { data: timeEventData });
      console.log(res);
    } catch (error) {
      console.error('Error updating resource', error); 
    }
  }
)

export const editEventAsync = createAsyncThunk(
  'data/editEventAsync',
  async (timeEventData, { dispatch }) => {
    dispatch(editEvent(timeEventData));
    try {
      const res = await axios.patch('/api/events', {...timeEventData});
      console.log(res); 
    } catch (error) {
      console.error('Error updating resource', error);
    }
  }
)
