import * as React from 'react';
import styles from './timesheetContent.module.scss';
import TimesheetSidebar from '../timesheetSidebar';
import Sheet from './sheet/Sheet';
import { EmployeesSection } from './EmployeesSection';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { LabelSection } from './LabelSection';

export default function TimesheetContent() {
  const section = useSelector((state:RootState) => state.timesheet.section); 
  return (
    <>
      <div className={styles.wrapper}> 
        <TimesheetSidebar />
        <div className={styles.content}>
          { section=='timesheet' && <Sheet /> }
          { section=='employees' && <EmployeesSection /> }
          { section=='label' && <LabelSection /> } 
        </div>
        
      </div>
    </>
  )
}