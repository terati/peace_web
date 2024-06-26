import * as React from 'react';
import styles from './EmployeesSection.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import NameIcon from './NameIcon';
import { AppDispatch, RootState } from '../../../../store/store';
import ActionComponent from './ActionComponent';
import { Layover } from '../sheet/Layover';
import { Button } from '../sheet/Layover/Button';
import { SearchBar } from './SearchBar';
import { closeLayover, openLayover, transitionLayoverSection } from '../../../../reducers/LayoverReducer';
import { Add } from '@mui/icons-material';
import { clearSelectedEmployee } from '../../../../reducers/EmployeeReducer';
import { Chip } from './Chip';
import { getEmployeesAsync } from 'reducers/EmployeeAsync';
import { SearchFilter } from './SearchFilter';

export default function EmployeesSection() {

  const employees = useSelector((state: RootState) => state.employees.employees);
  const [layoverStatus, setLayOverStatus] = React.useState({
    isVisible: true,
    type: 'time',
  })
  const layoverOpen = useSelector((state:RootState) => state.layover.open);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(transitionLayoverSection('addEmployee'));
    dispatch(getEmployeesAsync());
  }, [])

  const addEmployeeClickHandler = () => {
    dispatch(transitionLayoverSection('addEmployee'));
    dispatch(openLayover());
    dispatch(clearSelectedEmployee());
  }

  return (
    <div className={styles.wrapper}>
      <Layover layoverStatus={layoverStatus} setLayOverStatus={setLayOverStatus}/>
      <div className={styles.topBar}>
        <h1> Employees </h1>
      </div>
      <div className={styles.filterBar}>
        <div className={styles.gridFilterSection}> 
          <SearchBar /> 
          <SearchFilter />
        </div>
        <Button onClick={addEmployeeClickHandler} rounded={true}>
          <Add />
        </Button>

      </div>
      <div className={styles.gridWrapper}>
        <table className={styles.employeeTable}>
          <thead>
            <tr className={styles.employeeHeader}>
              <th> Type </th>
              <th> Name </th>
              <th> Role </th>
              <th> Active </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.map((employee:any, _) => {
              return (
                <tr className={styles.employeeRow} key={'e'+employee.employee_id}>
                  <td> admin </td>
                  <td className={styles.nameColumn}> 
                    <NameIcon name={employee.first_name+" "+employee.last_name} />  <span className={styles.employeeName}>{employee.first_name} {employee.last_name}</span> </td>
                  <td> {employee.category} </td>
                  <td> <Chip active={employee.active}> {employee.active ? 'Active' : 'Inactive'} </Chip>  </td>
                  <td> 
                    <ActionComponent dataId={employee.employee_id} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}