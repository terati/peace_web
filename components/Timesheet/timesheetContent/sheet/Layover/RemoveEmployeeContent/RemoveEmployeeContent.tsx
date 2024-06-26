import * as React from 'react';
import styles from './RemoveEmployeeContent.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { Button } from '../Button';
import { closeLayover } from '../../../../../../reducers/LayoverReducer';
import { removeEmployee } from '../../../../../../reducers/EmployeeReducer';
import { removeEmployeeAsync } from 'reducers/EmployeeAsync';

const RemoveEmployeeContent = () => {
  const employee = useSelector((state: RootState) => state.employees.selectedEmployee);
  const dispatch = useDispatch();

  const cancelClickHandler = () => {
    dispatch(closeLayover());
  }

  const removeEmployeeClickHandler = () => {
    dispatch(removeEmployeeAsync());
    dispatch(closeLayover()); 
  }

  return (
    <div className={styles.wrapper}>
      <h2> Remove Employee </h2>
      <div className={styles.section}>
        <p> First Name: {employee.first_name} </p>
        <p> Last Name: {employee.last_name} </p>
        <p> Category: {employee.category} </p>
        <p> Active: {employee.active ? 'active' : 'inactive'} </p>
      </div>
      <div className={styles.endSection}>
        <Button
          className={styles.cancelButton}
          onClick={cancelClickHandler}
        > Cancel </Button>
        <Button
          type="submit"
          onClick={removeEmployeeClickHandler}
        > Confirm Delete </Button>
      </div>
    </div>
  )
}

export default RemoveEmployeeContent;