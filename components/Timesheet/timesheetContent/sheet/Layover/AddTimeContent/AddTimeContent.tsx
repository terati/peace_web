import * as React from 'react';
import styles from './AddTimeContent.module.scss';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { Button } from '../Button';
import { time } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { EventInterface, clearSignal, createEvent, defaultEvent } from '../../../../../../reducers/TimeTrackerReducer';
import { DatePicker } from '../../DatePicker';
import { RootState } from '../../../../../../store/store';
import { createEventAsync } from 'reducers/TimeTrackerAsync';
import { closeLayover } from 'reducers/LayoverReducer';
import { TIMEOPTIONS, VALUETOLABELMAPPERTIMEOPTIONS } from '../Select/TimeOptions';

interface TimeEventInterface {
  eid: string;
  startTime: string;
  endTime: string;
  notes: string;
}

const todaysDateFormatted = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth()+1).toString().padStart(2,'0');
  let day = today.getDate().toString().padStart(2,'0');
  let formattedDate = year + month + day;
  return formattedDate; 
}

export default function AddTimeContent(props:any) {
  const {
  } = props;

  const [timeEvent, setTimeEvent] = React.useState<any>({
    event_id: 'sdfg', 
    employee_id: '',
    employee_name: '',
    employee_category: '', 
    creator_id: '',
    creator_name: '',
    creator_category: '',
    start_time: '',
    end_time: '',
    start_date: todaysDateFormatted(),
    creation_date: '20240521',
    edited_date: '20240521',
    note: '',
  });

  const dispatch = useDispatch();
  const signal = useSelector((state:RootState) => state.timetracker.signal);
  const employees = useSelector((state:RootState) => state.employees.employees);
  const [employeeOptions, setEmployeeOptions] = React.useState([]);  
  const [employeeDt, setEmployeeDt] = React.useState({}); 

  const publishClickHandler = () => {
    dispatch(createEventAsync(timeEvent));
    dispatch(closeLayover());
  }

  React.useEffect(() => {
    if (signal=='clearCurrentEvent') {
      setTimeEvent(defaultEvent); 
      dispatch(clearSignal);
    }
  }, [signal, dispatch])

  React.useEffect(() => {
    let employeeOptionsTmp = [];
    let employeeDtTmp = {}; 
    for (let employee_key in employees) {
      let employee = employees[employee_key]; 
      let name = employee.first_name + ' ' + employee.last_name;
      employeeOptionsTmp.push({
        label: name,
        value: employee.employee_id
      })
      employeeDtTmp[employee.employee_id] = name;
    }
    setEmployeeOptions(employeeOptionsTmp); 
    setEmployeeDt(employeeDtTmp);
  }, [employees])

  const employeeChooserOnChange = (employee_id) => {
    setTimeEvent((prev) => {return ({
      ...prev, 
      employee_id: employee_id
    })})
  }

  const datePickerOnChange = (chosenDate) =>  {
    setTimeEvent((prev) => { return {...prev, start_date: chosenDate}});
    console.log('hello')
  }

  const cancelClickHandler = () => {
    dispatch(closeLayover());

  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2> Add Event </h2>
        <div className={styles.section}>
          <p> Team Member </p>      
          <Select options={employeeOptions}
            value={employeeDt[timeEvent.employee_id]}
            onChange={(val) => employeeChooserOnChange(val)} 
          />
        </div>
        <div className={styles.section}>
          <p> Start Date </p>
          <DatePicker
            onChange={datePickerOnChange}
          />
        </div>
        <div className={`${styles.section} ${styles.time}`}>
          <div className={styles.startTime}>
            <p> Start Time </p>
            <Select type={'time'}
              value={VALUETOLABELMAPPERTIMEOPTIONS[timeEvent.start_time]}
              onChange={(val) => setTimeEvent((prev) => {
                return ({...prev, start_time: val})})
              } 
            />
          </div>
          <div className={styles.endTime}>
            <p> End Time </p>
            <Select type={'time'} 
              value={VALUETOLABELMAPPERTIMEOPTIONS[timeEvent.end_time]}
              onChange={(val) => setTimeEvent((prev) => {
                return ({...prev, end_time: val})})
              } 
            />
          </div>
        </div>
        <div className={`${styles.section}`}>
          <p> Notes </p>
          <Textarea 
            value={timeEvent.note}
            onChange={(val) => setTimeEvent((prev) => {
              return ({...prev, note: val})})
            } 
          />
        </div>

      
        <div className={styles.endSection}>
          <Button className={styles.cancelButton} onClick={cancelClickHandler} > Cancel </Button> 
          <Button className={styles.publishButton} onClick={publishClickHandler}> Publish </Button>
        </div>
      
      </div>
    </>
  )
}