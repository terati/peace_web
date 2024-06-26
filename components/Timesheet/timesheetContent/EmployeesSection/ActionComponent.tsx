import * as React from 'react';
import Dropdown from './Dropdown';
import styles from './ActionComponent.module.scss';
import { MoreHoriz } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { focusSelectedEmployee } from '../../../../reducers/EmployeeReducer';
import { openLayover, transitionLayoverSection } from '../../../../reducers/LayoverReducer';


export default function ActionComponent(props: any) {
  const {
    dataId,
    setLayOverStatus
  } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const childRef = React.useRef(null);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setOpen((prev) => !prev);
  }

  const onBlurHandler = (e: any) => {
    if (e.relatedTarget!=childRef.current) setOpen(false);

  }

  const editLaunchLayover = () => {
    setLayOverStatus((prev:any) => {
      return {...prev, isVisible: true}
    });
  }

  const options = [{
    label: 'edit',
    value: 'edit',
    callback: (employee_id: string) => {
      dispatch(focusSelectedEmployee(employee_id));
      dispatch(transitionLayoverSection('editEmployee'))
      dispatch(openLayover());
      setOpen(false);
    }
  }, {
    label: 'remove',
    value:'remove',
    callback: (employee_id: string) => {
      dispatch(focusSelectedEmployee(employee_id));
      dispatch(transitionLayoverSection('removeEmployee'))
      dispatch(openLayover());
      setOpen(false);
    }
  }]

  return (
    <div className={styles.wrapper}>
      <div className={styles.moreIcon}
        onClick={clickHandler}
        onBlur={onBlurHandler}
        tabIndex={0}
      ><MoreHoriz /> 
        
      </div>
      { open && <Dropdown dataId={dataId} options={options} ref={childRef} /> }
      
    </div>
  )
}