import * as React from 'react';
import styles from './Row.module.scss';
import TimeEvent from './TimeEvent';
import { EmployeeType } from '../../../../reducers/EmployeeReducer';


interface RowInterface {
  employee: EmployeeType;
  startDate: Date;
  key?: string | number;
}

export default function Row(props:RowInterface) {
  const {
    employee,
    startDate
  } = props;
  const [weekArray, setWeekArray] = React.useState<string[]>([]);
  const [rowDataArranged, setRowDataArranged] = React.useState<any>(); 


  React.useEffect(() => {
    let rowDataArrangedTmp:any = {};
    // for (let row of schedule) {
    //   if (rowDataArrangedTmp[row.date]!=undefined) {
    //     rowDataArrangedTmp[row.date].push(row);
    //   } else {
    //     rowDataArrangedTmp[row.date] = [row];
    //   }
    // }
    // setRowDataArranged(rowDataArrangedTmp);

    
    let weekArrayTmp = [];
    let startDayDate = new Date(startDate);
    for (let i=0; i<7; ++i) {
      let nextDay = new Date(startDayDate);
      nextDay.setDate(startDayDate.getDate() + i); 
      weekArrayTmp.push(nextDay.toISOString().split('T')[0].replace(/-/g, ''));
      // console.log(nextDay.toISOString().split('T')[0].replace(/-/g, '') +"@@"+i);
    }
    setWeekArray(weekArrayTmp);
  }, []);

  return (
    <tr className={styles.row}>
      <td> {employee?.first_name} {employee?.last_name} </td>
      {Array.from({length:7}).map((date,idx) => {
        let nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + idx);
        // console.log(nextDay)
        return (
          <td key={idx}>
            <TimeEvent date={nextDay} employee_id={employee.employee_id} />
          </td>
        )
      })}
    </tr>
  )

}