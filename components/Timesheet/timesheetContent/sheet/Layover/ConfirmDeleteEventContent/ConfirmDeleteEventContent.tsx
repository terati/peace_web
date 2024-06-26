import * as React from 'react';
import styles from './ConfirmDeleteEventContent.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Button } from '../Button';
import { closeLayover } from 'reducers/LayoverReducer';
import { removeEventAsync } from 'reducers/TimeTrackerAsync';

const ConfirmDeleteEventContent = () => {
  const employee = useSelector((state:RootState) => state.employees.selectedEmployee);
  const event = useSelector((state:RootState) => state.timetracker.currentTimeEvent);
  const dispatch = useDispatch(); 

  const cancelClickHandler = () => {
    dispatch(closeLayover()); 
  }

  const deleteClickHandler = () => {
    const timeEventData = {
      event_id: event.event_id
    };
    console.log(timeEventData);
    dispatch(removeEventAsync(timeEventData))
    dispatch(closeLayover());
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h2> Confirm Delete </h2>
        <p> Are you sure you would like to delete this event? </p>
        <p> Name: {event.creator_name} </p>
        <p> Start Date: {event.start_date} </p>
        <p> Start Time: {event.start_time} </p>
        <p> End Time: {event.end_time} </p>
        <p> Note: {event.note} </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.cancelButton} onClick={cancelClickHandler}>  Cancel </Button>
        <Button className={styles.deleteButton} onClick={deleteClickHandler}> Delete </Button>
      </div>
    </div>
  )
}

export default ConfirmDeleteEventContent;