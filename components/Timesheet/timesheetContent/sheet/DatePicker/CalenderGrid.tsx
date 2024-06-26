import * as React from 'react';
import styles from './CalenderGrid.module.scss';
import { ArrowDownward, ArrowDropDown, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { DAY_NAME_MAP, MONTH_NAME_MAP } from '../DateHelperFunctions';

interface CalenderGridInterface {
  // month: number;
  // setMonth: React.Dispatch<React.SetStateAction<any>>;
  onChange?: (year:number, month:number, day:number) => void; // callback fired when date choose changed
  onMonthChange?: () => void; 
  // day?: number;
  // year?: number;
}

const dayMarks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function CalenderGrid(props: CalenderGridInterface) {
  const {
    // month = 3, // 0 indexed [0-11]
    onMonthChange, // callback fired when month changes
    onChange,
    // day = 1,
    // year = 2024,
  } = props;
  const todaysDate = new Date();
  const [dayOfWeek, setDayOfWeek] = React.useState<number>(todaysDate.getDay()); // 0-6 representing MON-SUN
  const [day, setDay] = React.useState<number>(todaysDate.getDate());
  const [month, setMonth] = React.useState<number>(todaysDate.getMonth()); // o indexed [0-11]
  const [year, setYear] = React.useState<number>(todaysDate.getFullYear());
  const [yearChooserOpen, setYearChooserOpen] = React.useState<boolean>(false);

  // the temp values are induced choosing from the dropdown and left and right but not completely chosen and locked in. 
  const [tmpDayOfWeek, setTmpDayOfWeek] = React.useState<number>(todaysDate.getDay());
  const [tmpDay, setTmpDay] = React.useState<number>(todaysDate.getDate());
  const [tmpMonth, setTmpMonth] = React.useState<number>(todaysDate.getMonth());
  const [tmpYear, setTmpYear] = React.useState<number>(todaysDate.getFullYear());

  const yearChooserRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [monthDays, setMonthDays] = React.useState<number>(new Date(year, tmpMonth+1, 0).getDate()); // gets the number of days in that particular month
  const [firstDays, setFirstDays] = React.useState<number>(new Date(year, tmpMonth, 1).getDay());

  const scrollToYear = () => {
    if (yearChooserRef.current) {
      yearChooserRef.current.scrollTop = 0; // reset to 0 scroll to consistently produce offset calculation.
      let parentTop = yearChooserRef.current?.getBoundingClientRect().top;
      let parentHeight = yearChooserRef.current?.getBoundingClientRect().height;
      let childTop = yearChooserRef.current?.children[tmpYear-1900].getBoundingClientRect().top;
      let childHeight = yearChooserRef.current?.children[tmpYear-1900].getBoundingClientRect().height;
      yearChooserRef.current.scrollTop = childTop-parentTop - parentHeight/2 + childHeight/2;
    }
  }

  React.useEffect(() => {
    scrollToYear();
  }, []);

  React.useEffect(() => {
    if (yearChooserOpen==true && yearChooserRef.current) yearChooserRef.current.focus();
  }, [yearChooserOpen])

  React.useEffect(() => {
    setMonthDays(new Date(tmpYear, tmpMonth+1, 0).getDate());
    setFirstDays(new Date(tmpYear, tmpMonth, 1).getDay());
  }, [tmpMonth, tmpYear]);

  const moveMonthForward = () => {
    const nextMonthDate = new Date(year, tmpMonth+1, 1);
    setTmpMonth(nextMonthDate.getMonth());
    setTmpYear(nextMonthDate.getFullYear());
  }
  const moveMonthBackward = () => {
    const prevMonthDate = new Date(year, tmpMonth-1, 1);
    setTmpMonth(prevMonthDate.getMonth());
    setTmpYear(prevMonthDate.getFullYear());
  }

  const toggleYearChooser = () => {  // when you clikc the arrow the year dropdown selector opens
    scrollToYear();
    setYearChooserOpen((prev) => !prev);
  }
  const chooseYearClickHandler = (idx: number) => {
    setTmpYear(1900+idx);
    setYearChooserOpen(false);
  }
  const chooseDayClickHandler = (day: number) => {
    setTmpDay(day);
    let nextDayOfWeek = new Date(tmpYear, tmpMonth, day);
    setTmpDayOfWeek(nextDayOfWeek.getDay());

    setDay(day);
    setMonth(tmpMonth);
    setDayOfWeek(nextDayOfWeek.getDay());

    if (onChange) onChange(tmpYear, tmpMonth, day);
  }
  const onBlurHandler = (e: any) => {
    if (e.relatedTarget!==buttonRef.current) setYearChooserOpen(false);
  }

  const cancelClickHandler = (e: any) => {
    e.target.focus()
  }


  return (
    <div className={styles.calenderGrid}>
      <div className={styles.selectedDate}> 
        <span> SELECT DATE </span>
        <h2> {DAY_NAME_MAP[dayOfWeek].short}, {MONTH_NAME_MAP[month].long.toUpperCase()} {day} </h2>
      </div>
      <div className={styles.topControls}>
        <div className={styles.yearSelector}>
          <span> {MONTH_NAME_MAP[tmpMonth].long} {tmpYear} </span>
          <button onClick={toggleYearChooser} ref={buttonRef}><ArrowDropDown fontSize='small'/></button>
        </div>
        <div className={styles.monthSelector}>
          <button onClick={moveMonthBackward}><KeyboardArrowLeft /></button>
          <button onClick={moveMonthForward}><KeyboardArrowRight /></button>
        </div>
      </div>

     
      <div className={styles.innerWrapper}>
        <div className={`${styles.yearDropdown} ${(!yearChooserOpen ? styles.hidden : "")}`}
          // tabIndex={0}
          ref={yearChooserRef}
          onBlur={onBlurHandler}
        >
          { Array.from({ length: 200 }).map((_, idx) => {
              return (<>
                <div className={`${styles.yearOption} ${tmpYear==(1900+idx) ? styles.selectedYear : ""}`} 
                  key={`yearOption${idx}`} 
                  onClick={() => chooseYearClickHandler(idx)}
                > 
                  {1900+idx} 
                </div>
              </>)
            })
          }
        </div>

        { !yearChooserOpen && 
          <div className={styles.month}>
            <div className={styles.dayMarks}> 
              { dayMarks.map((day, idx) => {
                return (
                  <div key={idx}> <p>{day}</p> </div>
                )
              }) }
            </div>
            <div className={styles.days}>
              { Array.from({length: firstDays}).map((_, idx) => {
                return (
                  <div className={styles.emptyDay} key={"prevmonths"+idx}>
                    <p> {} </p>
                  </div>
                )
              })}
              { Array.from({length: monthDays}).map((_, idx) => {
                  return (
                    <div className={`${styles.day} ${(idx==tmpDay-1 && tmpMonth==month) ? styles.selectedDay : ""}`} key={idx}
                      onClick={() => chooseDayClickHandler(idx+1)}
                    >
                      <p> {idx+1} </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }  
      </div>
      
      <div className={styles.bottomControls}>
        {/* <button onClick={cancelClickHandler}><span>Cancel</span></button> */}
        <button><span> Confirm </span></button>
      </div>
    </div>
  )
}