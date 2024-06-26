import * as React from 'react'; 
import styles from './settings.module.scss';

export default function Settings() {
  return (
    <>
      <div className={styles.wrapper}> 
        <div className={styles.topRow}>
          <h1> Settings </h1>
          <div>
            [controls]
          </div>
          <div>

          </div>
        </div>
        <div className={styles.secondaryRow}>
          <div className={styles.memberChooser}> 
            <label>
              <h2> Employee </h2>
              ````
            </label>
          </div>
        </div>

      </div>
    </>
  )
}