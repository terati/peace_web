import * as React from 'react';
import styles from './EditEmployeeContent.module.scss'; 
import { Input } from '../Input';
import { Select } from '../Select';
import { Switch } from '../Switch';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeDefaultValue, EmployeeType, updateEmployee, updateSelectedEmployee } from '../../../../../../reducers/EmployeeReducer';
import { Button } from '../Button';
import { closeLayover } from '../../../../../../reducers/LayoverReducer';
import { RootState } from '../../../../../../store/store';
import { updateEmployeeAsync } from 'reducers/EmployeeAsync';

const EditEmployeeContent = () => {
  const dispatch = useDispatch();
  const selectedEmployee = useSelector((state: RootState) => state.employees.selectedEmployee);
  const [employee, setEmployee] = React.useState<EmployeeType>(selectedEmployee);

  const cancelClickHandler = () => {
    dispatch(closeLayover());
  }

  const selectRoleCallbackFunction = (key: string, val: string) => {
    dispatch(updateSelectedEmployee({
      [key]: val
    }))
  }

  const employeeActiveClickHandler = () => {
    setEmployee((prev) => {
      return {
        ...prev, 
        active: (prev.active=='true') ? 'false' : 'true',
      }
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const editEmployeeClickHandler = () => {
    dispatch(updateSelectedEmployee(employee));
    dispatch(updateEmployeeAsync(employee));
    dispatch(closeLayover());
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}> 
        <h2> Edit Employee </h2>
        <div className={styles.section}>
          <p> First Name </p>
          <Input dataId={'first_name'} 
            // changeCallback={inputCallbackFunction} 
            value={employee?.first_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee((prev) => {
              return ({...prev, first_name: e.target.value})
            })}
          />
        </div>
        <div className={styles.section}>
          <p> Last Name </p>
          <Input dataId={'lastName'} 
            // changeCallback={inputCallbackFunction}
            value={employee?.last_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee((prev) => {
              return ({...prev, last_name: e.target.value})
            })}
          />
        </div>
        <div className={styles.section}>
          <p> Role </p>
          <Select
            dataId={'role'}
            changeCallback={selectRoleCallbackFunction}
            value={employee?.category}
            onChange={(value:string) => setEmployee((prev) => {
              return ({...prev, category: value})
            })}
            options={[{
              label: 'Pharmacist',
              value: 'Pharmacist'
            }, {
              label: 'Technician',
              value: 'Technician'
            }]} />

        </div>
        <div className={`${styles.section} ${styles.horizontal}`}>
          <p> Active </p>
          <Switch onChange={employeeActiveClickHandler} checked={employee.active=='true'} />
        </div>
        <div className={styles.endSection}>
            <Button
              className={styles.cancelButton}
              onClick={cancelClickHandler}
            > Cancel </Button>
            <Button
              type="submit"
              onClick={editEmployeeClickHandler}
            > Confirm Edits </Button>
          </div>
      </form>
    </div>
  )
}

export default EditEmployeeContent;