import * as React from 'react';
import styles from './Layover.module.scss';
import { CSSTransition } from 'react-transition-group';
import { CloseOutlined } from '@mui/icons-material';
import AddTimeContent from './AddTimeContent/AddTimeContent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { closeLayover } from '../../../../../reducers/LayoverReducer';
import { EmployeeContent } from './EmployeeContent';
import { EditEmployeeContent } from './EditEmployeeContent';
import { RemoveEmployeeContent } from './RemoveEmployeeContent';
import EditEventContent from './EditEventContent/EditEventContent';
import { ConfirmDeleteEventContent } from './ConfirmDeleteEventContent';

interface LayoverInterface {
}

export default function Layover(props: any) {
  const {
    layoverStatus, 
    setLayOverStatus,
    content,
  } = props; 
  const layoverOpen = useSelector((state:RootState) => state.layover.open);
  const layoverType = useSelector((state:RootState) => state.layover.type);
  const dispatch = useDispatch();

  // const [isVisible, setIsVisible] = React.useState<boolean>(true);

  // React.useEffect(() => {
  //   if (!isVisible) {
  //     let to = setTimeout(() => setIsVisible(true) , 1000);
  //     return () => clearTimeout(to);
  //   }
  // }, [isVisible])
  
  const closeLayoverClick = () => {
    dispatch(closeLayover());
  } 


  return (
    <>
      <div className={styles.wrapper}>
        { layoverStatus.isVisible && <div className={styles.bg}></div> }
        <CSSTransition
          in={layoverOpen}
          timeout={300}
          classNames={{
            appear: styles['lay-appear'],
            appearActive: styles['lay-active-appear'],
            enter: styles['lay-enter'],
            enterActive: styles['lay-enter-active'],
            exit: styles['lay-exit'],
            exitActive: styles['lay-exit-active']
          }}
          unmountOnExit
          // onExited={() => setIsVisible(false)}
        >
          <div className={`${styles.fg}`}>
            <div className={styles.fgInner}>
              <div className={styles.top}>
                <CloseOutlined className={styles.closeIcon} onClick={closeLayoverClick}/>
              </div>
                { layoverType=='editEvent' && <EditEventContent closeLayover={() => setLayOverStatus(false)} /> }
                { layoverType=='addEvent' && <AddTimeContent closeLayover={() => setLayOverStatus(false)} /> }
                { layoverType=='confirmDeleteEvent' && <ConfirmDeleteEventContent/> }
                { layoverType=='addEmployee' && <EmployeeContent /> }
                { layoverType=='editEmployee' && <EditEmployeeContent /> }
                { layoverType=='removeEmployee' && <RemoveEmployeeContent /> }
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  )
}