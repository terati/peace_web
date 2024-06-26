import * as React from 'react'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import styles from './timesheetSidebar.module.scss';
import { AssessmentOutlined, CalendarTodayOutlined, Groups2Outlined, ManageAccountsOutlined, Message, QuizOutlined, SettingsOutlined, SummarizeOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { togglePage } from '../../../reducers/timesheetReducer';
import IconWrapper from './IconWrapper';

export default function TimesheetSidebar() {
  const pageSelected = useSelector((state: RootState) => state.timesheet);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.bar}>
        <IconWrapper
          page = "timesheet"
          onClick={() => dispatch(togglePage("timesheet"))}
        >
          <CalendarTodayOutlined />
        </IconWrapper>
        <IconWrapper
          page = "reports"
          onClick={() => dispatch(togglePage("reports"))}
        >
          <AssessmentOutlined />
        </IconWrapper>
        <div className={styles.iconWrapper}>
          <ManageAccountsOutlined />
        </div>
        <IconWrapper
          page = "settings"
          onClick={() => dispatch(togglePage("settings"))}
        >
          <SettingsOutlined />
        </IconWrapper>
        <IconWrapper
          page = "messages"
          onClick={() => dispatch(togglePage("messages"))}
        >
          <Message />
        </IconWrapper>
        <IconWrapper
          page = "employees"
          onClick={() => dispatch(togglePage("employees"))}
        >
          <Groups2Outlined />
        </IconWrapper>
        <IconWrapper
          page = "label"
          onClick={() => dispatch(togglePage("label"))}
        >
          <QuizOutlined />
        </IconWrapper>
      
      </div>
    </>
  )
}