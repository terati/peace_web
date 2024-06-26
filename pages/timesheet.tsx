import * as React from 'react';
import { TimesheetNavigation } from '../components/Timesheet/navigation';
import TimesheetContent from '../components/Timesheet/timesheetContent';
import TimesheetSidebar from '../components/Timesheet/timesheetSidebar';

export default function Timesheet() {
  return (
    <>
      <TimesheetNavigation />
      <TimesheetContent /> 
    </>
  )
}