import * as React from 'react';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import Logo from '../../Main/icons/Logo';
import { Profile } from './Profile';

function TimesheetNavigation() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}> 
          <Logo fill="white" height={"100%"} width={"100%"}/>
          <h1> Peace Pharmacy </h1>
        </div>
        <div className={styles.profile}> 
          <div className={styles.notifications}> </div>
          <Profile />
        </div>
      </div>
    </>
  )
}


export default TimesheetNavigation; 
