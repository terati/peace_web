import * as React from 'react';
import styles from './Calender.module.scss';
import CalenderGrid from './CalenderGrid';

interface CalenderInterface {
  calenderVisible: boolean;
  setCalenderVisible?: any;
  onDateChange?: (year:number, month:number, day:number) => void;
}

export default function Calender(props: CalenderInterface) {
  const {
    calenderVisible,
    onDateChange
  } = props;
  const [month, setMonth] = React.useState<number>(0);

  return (
    <>
      { calenderVisible &&
        <div className={styles.dropdown}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className={styles.calender}>
            <CalenderGrid  onChange={onDateChange} />
          </div>
          {/* <div className={styles.shade}>

          </div> */}
          <div className={styles.options}>

          </div>
        </div>
      }
    </>
  )
}