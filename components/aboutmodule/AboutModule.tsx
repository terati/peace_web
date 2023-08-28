import * as React from 'react';
import styles from './AboutModule.module.scss';

import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface staffInterface {
  name?: string,
  title?: string,
  image?: string
}

const staff_arr: staffInterface[] = [
  {
    name: 'Glenn B.',
    title:  'Pharmacist in Charge',
    image: ''
  },
  {
    name: 'Benjamin N.',
    title:  'Pharmacist',
    image: ''
  },
  {
    name: 'Anita L.',
    title:  'Technician',
    image: ''
  },
  {
    name: 'Sasha H.',
    title:  'Technician',
    image: ''
  },
  {
    name: 'Kevin H.',
    title:  'Pharmacist',
    image: ''
  },
  {
    name: 'Shu W.',
    title:  'Pharmacist',
    image: ''
  },
  {
    name: 'Ming L.',
    title:  'Pharmacist',
    image: ''
  }
];

function AboutModule() {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  return (
    <>
      <div className={styles.about_wrapper}>
        <div className={styles.headline}> 
          <h1> <FormattedMessage id = "about.title.h1" /> </h1>
          <p> <FormattedMessage id = "about.description.p" /> </p>
        </div>
        <h2> <FormattedMessage id = "about.staff.h2" /> </h2>
        <div className={styles.staff}>
          
          { staff_arr.map((idv, idx) => {
              return (
                <div className={styles.staff_card}>
                  <div className={styles.profile_photo}> </div>
                  <p className={styles.profile_name}> {idv.name} </p>
                  <p className={styles.profile_title}> {idv.title} </p>
                </div>
              );
            })
            
          }
        </div>
      </div>
    </>
  )
}

export default AboutModule;