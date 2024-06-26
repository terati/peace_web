import * as React from 'react';
import styles from './Chip.module.scss';

interface ChipInterface {
  color?: string;
  children?: React.ReactNode;
  active?: boolean;
  status?: boolean; 
}

const Chip = (props: ChipInterface) => {
  const {
    active, 
    color,
    children,
    status, 
    ...rest
  } = props;
  
  return (
    <span>
      <div className={`${styles.chip} 
          ${active==true ? styles.active : styles.inactive}
        `}
        {...rest}
      >
        { children }
      </div>
    </span>
  )
}

export default Chip;