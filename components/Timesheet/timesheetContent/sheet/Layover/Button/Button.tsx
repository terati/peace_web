import * as React from 'react';
import styles from './Button.module.scss';

export default function Button(props: any) {
  const {
    children,
    className,
    rounded = false,
    ...rest
  } = props; 
  
  return (
    <span>
      <button className={`${styles.button} 
          ${className}
          ${rounded ? styles.rounded : ''}
        `}
       {...rest}>
       { children } 
      </button>
    </span>
  )
}