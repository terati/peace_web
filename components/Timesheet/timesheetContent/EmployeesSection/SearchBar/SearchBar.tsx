import * as React from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <span className={styles.searchBar}>
      <input placeholder={"search"} /> 
    </span>
  )
}