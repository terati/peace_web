import * as React from 'react';
import styles from './EmployeeContent.module.scss';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeLayover } from '../../../../../../reducers/LayoverReducer';
import { EmployeeDefaultValue, EmployeeType, createEmployee, updateEmployee, updateSelectedEmployee } from '../../../../../../reducers/EmployeeReducer';
import { RootState } from '../../../../../../store/store';
import { Switch } from '../Switch';
import { createEmployeeAsync, getEmployeesAsync } from 'reducers/EmployeeAsync';

const EmployeeContent = () => {
  const dispatch = useDispatch();
  const selectedEmployeeValues = useSelector((state: RootState) => state.employees.selectedEmployee);
  const [employee, setEmployee] = React.useState<EmployeeType>(selectedEmployeeValues);
  const [fsm, setFsm] = React.useState<string>('add'); //add confirm


  const cancelClickHandler = () => {
    dispatch(closeLayover());
  }

  const addEmployeeClickHandler = () => {
    setFsm('confirm');
  }

  const confirmAddEmployeeClickHandler = () => {
    dispatch(updateSelectedEmployee(employee)); 
    dispatch(createEmployeeAsync(employee));
    dispatch(closeLayover());
  }

  const inputCallbackFunction = (key: string, val: string) => {
    dispatch(updateSelectedEmployee({
      [key]: val
    }));
  }

  const selectRoleCallbackFunction = (key: string, val: string) => {
    dispatch(updateSelectedEmployee({
      [key]: val
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const employeeActiveClickHandler = () => {
    setEmployee((prev) => {
      return {
        ...prev, 
        active: !prev.active
      }
    });
  }

  const editClickHandler = () => {
    setFsm('add'); 
  }

  React.useEffect(() => {
    setEmployee(selectedEmployeeValues);
    // console.log(selectedEmployeeValues);
  }, [])

  return (
    <div className={styles.wrapper}>
      { fsm=='edit' && 
        <form onSubmit={handleSubmit}>
          <h2> Edit Employee</h2>
          <div className={styles.section}>
            <p> First Name </p>
            <Input dataId={'first_name'} 
              // changeCallback={inputCallbackFunction} 
              value={selectedEmployeeValues.first_name}
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
              dataId={'category'}
              changeCallback={selectRoleCallbackFunction}
              value={employee.category}
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
            <Switch onChange={employeeActiveClickHandler} checked={employee.active} />
          </div>
        </form>
      }
      { fsm=='add' &&
        <form onSubmit={handleSubmit}>
          <h2> Add Employee </h2>
          <div className={styles.section}>
            <p> First Name </p>
            <Input dataId={'firstName'} 
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
                // console.log(employee);
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
            <Switch onChange={employeeActiveClickHandler} checked={employee.active} />
          </div>
          <div className={styles.endSection}>
            <Button
              className={styles.cancelButton}
              onClick={cancelClickHandler}
            > Cancel </Button>
            <Button
              type="submit"
              onClick={addEmployeeClickHandler}
            > Add </Button>
          </div>
        </form>
      }
      { fsm=='confirm' &&
        <form onSubmit={handleSubmit}>
          <h2> Confirm Add Employee </h2>
          <div className={styles.section}>
            <p> First Name: {employee.first_name} </p>
            <p> LastName: {employee.last_name} </p>
            <p> Role: {employee.role} </p>
            <p> Active: {employee.active ? 'Active' : 'Inactive'} </p>
          </div>
          <div className={styles.endSection}> 
            <Button
              className={styles.backButton}
              onClick={confirmAddEmployeeClickHandler}
            > Edit </Button>
            <Button
              type="submit"
              onClick={confirmAddEmployeeClickHandler}
            > Confirm </Button>
          </div>
        </form> 
      }
    </div>
  )
}

export default EmployeeContent;