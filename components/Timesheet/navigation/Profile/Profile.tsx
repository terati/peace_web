import * as React from 'react';
import styles from './Profile.module.scss';
import { CSSTransition } from 'react-transition-group';
import { Button } from '../../timesheetContent/sheet/Layover/Button';

interface ProfileInterface {
  initials?: string;
}

const Profile = (props: ProfileInterface) => {
  const {
    initials = 'NA'
  } = props;

  const [profileOpen, setProfileOpen] = React.useState<boolean>(false);

  const toggleProfileOpenClickHandler = () => {
    setProfileOpen((prev) => !prev);
  }

  const closeProfileBlurHandler = () => {
    setProfileOpen(false);
  }

  return (
    <div className={styles.profile}
      tabIndex={1}
      onBlur={closeProfileBlurHandler}
      onClick={toggleProfileOpenClickHandler}
    >
      { initials }
      <CSSTransition
        in={profileOpen}
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
      >
        <div className={styles.profileLayover}>
          <p> Shortcuts </p>
          <p> Documentation </p>
  
          <Button> Sign Out </Button>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Profile;