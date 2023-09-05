import * as React from 'react';
import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <>
      <div className={styles.spinner_loader}></div>
    </>
  )
}

export default Spinner;