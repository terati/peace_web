import * as React from 'react';
import styles from './NameIcon.module.scss';

interface NameIconInterface {
  name?: string;
  color?: string;
}

export default function NameIcon(props: NameIconInterface) {
  const {
    name = 'Example Name',
    color = 'black'
  } = props;
  const nameSplit = name.split(' ');
  const initials = (nameSplit.length==2) ? nameSplit[0][0]?.toUpperCase() + nameSplit[1][0]?.toUpperCase() : "";  
  return (
    <span>
      <div className={styles.nameIcon} 
        style={{ backgroundColor: color }}
      >
        <span> {initials} </span>
      </div>
    </span>
  )
}