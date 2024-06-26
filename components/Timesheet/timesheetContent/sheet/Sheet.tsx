import * as React from 'react'; 
import styles from './sheet.module.scss';
import { Dropdown } from './dropdown';
import Row from './Row';
import TableColumnDate from './TableColumnDate';
import { DatePicker } from './DatePicker';
import { Layover } from './Layover';
import { Button } from './Layover/Button';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useDispatch, useSelector } from 'react-redux';
import { openLayover, transitionLayoverSection } from '../../../../reducers/LayoverReducer';
import { RootState } from '../../../../store/store';
import { getEmployeesAsync } from 'reducers/EmployeeAsync';
import { getEventsAsync } from 'reducers/TimeTrackerAsync';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';

// week from Feb [12-16]
const timeTableData = [
  {
    id: "1234", // The id of the person
    name: "Timothy", // the name of the person at that time
    role: "Tech", // the current role of the person at that time
    schedule: [
      {
        date: "2024-02-13", // expected in format of YYYY-MM-DD
        start: "14:00:00", // expected in format of "HH:MM:SS"
        end: "17:30:00",  // "HH:MM:SS"
        creationDate: "2024-002-13T16:23:13", // formatted as "YYYY-MM-DDTHH:MM:SS"
        lastEditedDate: "2024-002-13T16:23:13", 
        creatorId: "1234" // the id of the person who created this event
      },
      {
        date: "2024-02-15", // expected in format of YYYY-MM-DD
        start: "14:00:00", // expected in format of "HH:MM:SS"
        end: "17:30:00",  // "HH:MM:SS"
        creationDate: "2024-002-13T16:23:13", // formatted as "YYYY-MM-DDTHH:MM:SS"
        lastEditedDate: "2024-002-13T16:23:13", 
        creatorId: "1234" // the id of the person who created this event
      }
    ]
  }, 
  {
    id: "2345", 
    name: "Benjamin", 
    role: "Pharmacist", 
    schedule: [
      {
        date: "2024-02-13", 
        start: "13:00:00", 
        end: "17:30:00", 
        creationDate: "2024-002-13T16:23:13", 
        lastEditedDate: "2024-002-13T16:23:13", 
        creatorId: "1234" 
      }
    ]
  }, 
]

export default function Sheet() {
  const [layoverStatus, setLayOverStatus] = React.useState({
    isVisible: true,
    type: 'addEvent',
  })
  const [todayDate, setTodayDate] = React.useState<Date>(new Date());
  const [startOfWeekDate, setStartOfWeekDate] = React.useState<Date>(() => {
    let today = new Date();
    let diff = (today.getDate() - today.getDay()); 
    return new Date(today.setDate(diff)); 
  });
  const [currentWeekDates, setCurrentWeekDates] = React.useState<Date[]>([]); 
  // console.log(startOfWeekDate);

  const dispatch = useDispatch();
  const employees = useSelector((state:RootState) => state.employees.employees);

  const createEventClickHandler = () => {
    dispatch(transitionLayoverSection('addEvent'));
    dispatch(openLayover()); 
  }

  const todayButtonClickHandler = () => {
    let todayDate = new Date();
    let diff = todayDate.getDate() - todayDate.getDay();
    todayDate.setDate(diff);
    setStartOfWeekDate(todayDate);
    console.log(todayDate);
    let week:Date[] = [];
    for (let i=0; i<7; ++i) {
      let newDate = new Date(todayDate);
      let diff = todayDate.getDate() + i;
      newDate.setDate(diff);
      week.push(newDate);
    }
    setCurrentWeekDates(week);
  }

  const moveBackOneWeekClickHandler = () => {
    let prevDate = new Date(startOfWeekDate);
    let diff = startOfWeekDate.getDate() - 7;
    prevDate.setDate(diff);
    setStartOfWeekDate(prevDate);
    let week:Date[] = [];
    for (let i=0; i<7; ++i) {
      let newDate = new Date(prevDate);
      let diff = prevDate.getDate() + i;
      newDate.setDate(diff);
      week.push(newDate);
    }
    setCurrentWeekDates(week);
  }

  const moveAheadOneWeekClickHandler = () => {
    let aheadDate = new Date(startOfWeekDate);
    let diff = startOfWeekDate.getDate() + 7;
    aheadDate.setDate(diff);
    setStartOfWeekDate(aheadDate);
    let week:Date[] = [];
    for (let i=0; i<7; ++i) {
      let newDate = new Date(aheadDate);
      let diff = aheadDate.getDate() + i;
      newDate.setDate(diff);
      week.push(newDate);
    }
    setCurrentWeekDates(week);
  }

  React.useEffect(() => {
    let week:Date[] = [];
    for (let i=0; i<7; ++i) {
      let newDate = new Date(startOfWeekDate);
      let diff = startOfWeekDate.getDate() + i;
      newDate.setDate(diff);
      week.push(newDate);
    }
    setCurrentWeekDates(week);
    dispatch(getEmployeesAsync());
    dispatch(getEventsAsync());
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <Layover layoverStatus={layoverStatus} setLayOverStatus={setLayOverStatus} />
        <div className={styles.topRow}>
          <div>
            <h1> April 2024 </h1>
          </div>
          <div className={styles.centerControl}>
            <Button className={styles.todayButton}
              onClick={todayButtonClickHandler}
            > Today </Button>
            <Button className={styles.arrow} onClick={moveBackOneWeekClickHandler}> <ArrowBackIosNewRounded fontSize='small' /> </Button>
            <div className={styles.datePickerWrapper}>
              <DatePicker />
            </div>
            <Button className={styles.arrow} onClick={moveAheadOneWeekClickHandler}> <ArrowForwardIosRounded fontSize='small' /> </Button>
          </div>
          <div>
            <Button
              onClick={createEventClickHandler}
            > 
              <DriveFileRenameOutlineIcon />
              <p> Create </p>  
            </Button>
          </div>
        </div>
        <div className={styles.secondaryRow}>
          {/* <div className={styles.memberChooser}> 
            <label><p> Employee </p></label>
            <div className={styles.selectionOptions}>
              <Dropdown />
              <Button onClick={() => setLayOverStatus((prev: any) => { return {...prev, isVisible: true}})}> Add Time </Button>
            </div>
          </div> */}
          
        </div>
        <div className={styles.gridWrapper}>
          <table className={styles.timeTable}>
            <thead>
              <tr className={styles.timeTableHeader}>
                <td className={styles.membersHeader}> Members </td>
                { currentWeekDates.map((date, idx) => {
                  // console.log(date)
                  return (
                    <>
                      <td className={styles.headerDates} key={"week"+idx}> <TableColumnDate date={date} />
                        <span className={styles.todayLine}> </span>
                      </td>
                      
                    </>
                  )
                }) }
                
                {/* <td className={styles.headerDates}> <TableColumnDate date="2024-05-07" /> </td>
                <td className={styles.headerDates}> <TableColumnDate date="2024-05-08" /> </td>
                <td className={styles.headerDates}> <TableColumnDate date="2024-05-09" /> </td>
                <td className={styles.headerDates}> <TableColumnDate date="2024-05-10" /> </td>
                <td className={styles.headerDates}> <TableColumnDate date="2024-05-11" /> </td>
                <td className={styles.headerDates}> <TableColumnDate date="2024-05-12" /> </td> */}
              </tr> 
            </thead>
            <tbody>
              { employees.map((employee, idx) => {
                  if (employee.active)
                  return (<Row startDate={startOfWeekDate} employee={employee} key={idx} />)
                }) 
              }
            </tbody>

          </table>
        </div>

      </div>
    </>
  )
}

  