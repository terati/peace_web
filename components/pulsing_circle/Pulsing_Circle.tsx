import * as React from 'react';
import styles from './Pulsing_Circle.module.scss';

interface pulsing_circle_props {
  open_status?: boolean;
}
function Pulsing_Circle(props:pulsing_circle_props) {
  const {
    open_status,
  } = props; 
  const pulse_circle_styles = {
    
  }
  return (
    <> 
      <div className={styles.pulsing_circle_wrapper}>
        <div 
          className={(open_status) ? styles.pulsing_circle_open : styles.pulsing_circle_closed}
        ></div>
      </div>
      
    </>
    
  )
}

export default Pulsing_Circle