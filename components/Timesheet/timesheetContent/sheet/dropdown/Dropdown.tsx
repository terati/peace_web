import * as React from 'react';
import styles from './Dropdown.module.scss';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'; 

interface EmployeeInterface {
  name: string
}

const employees: EmployeeInterface[] = []

export default function Dropdown(props: any) {
  const [selectedEmployee, setSelectedEmployee] = React.useState<string>("All");
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false); 

  const selectItemClick = React.useCallback((name: string) => {
    setSelectedEmployee(name);
    setShowDropdown(false); 
  }, [])

  return (
    <>
      <div className={styles.wrap}>
        <button value={selectedEmployee} onClick={() => setShowDropdown(!showDropdown)} onBlur={() => setShowDropdown(false)}>
          <span> { selectedEmployee }  </span>
          <div className={styles.iconWrap}> <UnfoldMoreIcon/>  </div>
          <div className={`${styles.select} ${showDropdown ? styles.show : styles.hide}`}>
            { employees.map((employee, idx) => {
                return (
                  <div className={styles.selectItem} onClick={() => selectItemClick(employee.name)}
                    key={idx}
                  >
                    <span> { employee.name } </span>
                  </div>
                )
              })
            }
          </div>
        </button>
      </div>
      
    </>    
  )
}