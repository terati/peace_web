import * as React from 'react';
import styles from './SearchFilter.module.scss';
import { FilterAltOffOutlined, FilterAltOutlined } from '@mui/icons-material';

const SearchFilter = () => {
  return (
    <>
      <button className={styles.searchfilterButton}>
        <FilterAltOutlined />
        <p> Filter </p>
      </button> 
    </>
  )
}

export default SearchFilter; 