import * as React from 'react';
import styles from '../AddTimeContent/AddTimeContent.module.scss';
import stylesEdit from './EditEventContent.module.scss';
import { Select } from '../Select';
import { DatePicker } from '../../DatePicker';
import { Textarea } from '../Textarea';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { editEventAsync } from 'reducers/TimeTrackerAsync';
import { closeLayover, transitionLayoverSection } from 'reducers/LayoverReducer';
import { VALUETOLABELMAPPERTIMEOPTIONS } from '../Select/TimeOptions';


const EditEventContent = (props: any) => {
  const {
  } = props;

  const dispatch = useDispatch();
  const signal = useSelector((state:RootState) => state.timetracker.signal);
  const employees = useSelector((state:RootState) => state.employees.employees);
  const [employeeOptions, setEmployeeOptions] = React.useState([]);  
  const [employeeDt, setEmployeeDt] = React.useState({});
  const focusedTimeEvent = useSelector((state:RootState) => state.timetracker.currentTimeEvent); 
  const [timeEvent, setTimeEvent] = React.useState<any>(focusedTimeEvent);

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

  const datePickerOnChange = (chosenDate:string) =>  {
    setTimeEvent((prev:any) => { return {...prev, start_date: chosenDate}});
  }

  const EditEventClickHandler = () => {
    dispatch(editEventAsync(timeEvent));
    console.log(timeEvent);
    dispatch(closeLayover());
  }

  const DeleteEventClickHandler = () => {
    dispatch(transitionLayoverSection('confirmDeleteEvent'));
  }

  const CancelClickHandler = () => {
    dispatch(closeLayover());
  }

  return (
    <div className={styles.wrapper}>
      <h2> Edit Event </h2>
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
          initialDate={timeEvent.start_date.split('-').join('')}
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
        <Button className={styles.deleteButton} onClick={DeleteEventClickHandler}> Delete Event </Button>
        <div className={styles.buttonsRight}>
          <Button className={styles.cancelButton} onClick={CancelClickHandler} > Cancel </Button> 
          <Button className={styles.publishButton} onClick={EditEventClickHandler}> Save Edits </Button>
        </div>
        
      </div>
    
    </div>
  )
}

export default EditEventContent; 