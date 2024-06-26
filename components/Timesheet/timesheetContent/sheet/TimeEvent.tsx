import * as React from 'react';
import styles from './TimeEvent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { openLayover, transitionLayoverSection } from '../../../../reducers/LayoverReducer';
import { clearCurrentTimeEvent, focusCurrentTimeEvent } from '../../../../reducers/TimeTrackerReducer';
import { focusSelectedEmployee } from 'reducers/EmployeeReducer';
// import { TimesInterface } from './SheetTypes';

interface TimeEventInterface {
  times?: any; 
  date?: Date;
  employee_id?: string;
}

export default function TimeEvent(props: TimeEventInterface ) {
  const { 
    date = new Date(),
    times = [],
    employee_id = '',
  } = props; 

  const events =  useSelector((state:RootState) => state.timetracker.formattedEvents); 
  const dayEventsByPerson = events[date.toISOString().split('T')[0].replace(/-/g, '')+employee_id];
  // console.log(date.toISOString().split('T')[0].replace(/-/g, '')+employee_id);  
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(times); 
  }, [])

  // assuming input in format HH:MM:SS and padded for zeros
  const abbreviateTime = (timeString: string) => {
    const pattern = /^\d{2}:\d{2}$/;
    if (!pattern.test(timeString.trim())) return timeString;
    let timeArray = timeString?.split(':');
    let hours = parseInt(timeArray[0], 10);
    let ampm = (hours>=12) ? 'p' : 'a';
    hours = hours%12;
    hours = hours ? hours : 12;
    if (timeArray[1]=='00') return hours + ampm;
    return hours + ':' + timeArray[1] + ampm;
  }

  const eventClickHandler = (timeEvent: Time) => {
    
    dispatch(transitionLayoverSection('editEvent'));
    dispatch(clearCurrentTimeEvent());
    dispatch(focusSelectedEmployee(timeEvent.employee_id));
    dispatch(focusCurrentTimeEvent(timeEvent))
    dispatch(openLayover());
  }

  return (
    <>
      { dayEventsByPerson && dayEventsByPerson.map((timeEvent, idx) => {
        
        return (
          <div className={styles.timeEvent} key={"dayEvent"+idx}
            onClick={() => eventClickHandler(timeEvent)}
          > 
            <p> {abbreviateTime(timeEvent.start_time)} - {abbreviateTime(timeEvent.end_time)} </p>
          </div>
        )
      }) }
    </>
  )
}