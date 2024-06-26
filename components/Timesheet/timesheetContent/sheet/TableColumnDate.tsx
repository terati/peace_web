import * as React from 'react'; 
import styles from './TableColumnDate.module.scss';
import { DAY_NAME_MAP, MONTH_NAME_MAP } from './DateHelperFunctions';

interface TableColumnDateInterface {
  date: Date;  
}

interface DateStateType {
  date: Date; 
  day: number | null;    // 2 DD but not zero padded
  weekday: string | null; //  MON, TUES, WED, etc
  month: string | null; // JAN, FEB, etc
}



export default function TableColumnDate(props: TableColumnDateInterface) {
  const {
    date 
  } = props;
  const [dateParsed, setDateParsed] = React.useState<DateStateType>({ date: new Date(), day:null, weekday:null, month:null });

  React.useEffect(() => {
    let curDate = date;
    // console.log(curDate);
    // console.log(curDate.getDate());
    setDateParsed({
      date: date,
      day: curDate.getDate(),
      weekday: DAY_NAME_MAP[curDate.getDay()].short,
      month: MONTH_NAME_MAP[curDate.getMonth()].short
    })
  }, [date])

  return (
    <div className={styles.dateHeaderInner}>
      <div className={styles.weekday}> <p> {dateParsed.weekday} </p> </div>
      <div className={styles.day}> <p> {dateParsed.day} </p> </div>
      {/* <div className={styles.day}> <h2>{dateParsed.day}</h2> </div>
      <div className={styles.weekdayMonth}> 
        <div className={styles.weekday}><p>{dateParsed.weekday}</p></div>
        <div className={styles.month}><p>{dateParsed.month}</p></div>
      </div> */}
    </div>
  )
}