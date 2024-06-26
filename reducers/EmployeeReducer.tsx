import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { v4 as uuidv4 } from 'uuid';
import { createEmployeeAsync, getEmployeesAsync } from "./EmployeeAsync";

export type EmployeeActiveType = boolean; 

export type EmployeeType = {
  employee_id: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  category: string;
  date_created: string;
  date_updated: string;
  last_login: string;
  initials: string;
  active: boolean;
  username: string;
  password: string;
  reset_password_enabled: boolean; 
  [key: string]: any;
}

 export const EmployeeDefaultValue: EmployeeType = {
  employee_id: '',
  email: '',
  phone: '',
  first_name: '',
  last_name: '',
  category: '',
  date_created: '20240516',
  date_updated: '20240516',
  last_login: '20240516',
  initials: '',
  active: false,
  username: '',
  password: '',
  reset_password_enabled: false
 }

interface EmployeesInterface {
  employees: EmployeeType[];
  selectedEmployee: EmployeeType;
}

interface UpdateEmployeePayloadInterface {
  // attributes: {[key: string]: any}; 
}

interface CreateEmployeePayloadInterface {
  employee_id: string;
  attributes: {[key: string]: any};
}

type UpdatableEmployeeInte<T extends EmployeeType> = {
  [P in keyof T]: T[P] | undefined;
}

const initialState: EmployeesInterface = {
  employees: [],
  selectedEmployee: EmployeeDefaultValue
}

interface ValidatorInterface {
  selectedEmployee?: EmployeeType;
  isValid: boolean;
}

const generateId = () => { return uuidv4(); }

const employeeValidator = (selectedEmployee: EmployeeType):ValidatorInterface => {
  let se = selectedEmployee;
  if (se.firstName.length==0 || se.lastName.length==0 || se.role.length==0) return {isValid:false}
  se.employee_id = generateId(); 
  const initials = se.firstName[0].toUpperCase() + se.lastName[0].toUpperCase();
  se.initials = initials;
  return {selectedEmployee:se, isValid: true};
}

export type EmployeeIdType = string;

const EmployeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    updateEmployee(state: EmployeesInterface, action: PayloadAction<EmployeeType>) {
      let employees = state.employees;
      for (let i=0; i<employees.length; ++i) {
        let employee = employees[i]; 
        if (employee.employee_id!=action.payload.employee_id) continue;
        if (employee.employee_id==action.payload.employee_id) {
          let payload = action.payload;
          for (let key in payload) {
            employee[key] = payload[key];
          }
        }
      }

    },
    createEmployeeManual(state: EmployeesInterface, action: PayloadAction<UpdateEmployeePayloadInterface>) {
      // const { employee_id, attributes } = action.payload;
      // let employees = state.employees;
      // for (let employee of employees) {
      //   if (employee.employee_id==employee_id) return;
      // }
      // let employee: EmployeeType = {employee_id:'', firstName:'', role: '', lastName:'', dateCreated:'', dateUpdated:'', initials:'', active:false};
      // employee.employee_id = employee_id;
      // for (const key in attributes) {
      //   employee[key as keyof EmployeeType] = attributes[key];
      // }
      // employees.push(employee);
    },
    createEmployee(state: EmployeesInterface, action) {
      console.log(action);
      state.employees.push(action.payload);
    },
    removeEmployee(state: EmployeesInterface) {
      let employees= state.employees;
      employees = employees.filter((employee) => employee.employee_id!=state.selectedEmployee.employee_id);
      state.employees = employees; 
      state.selectedEmployee = EmployeeDefaultValue;
    },
    updateSelectedEmployee(state: EmployeesInterface, action: PayloadAction<Partial<EmployeeType>>) {
      let payload = action.payload;
      for (let key in payload) {
        state.selectedEmployee[key] = payload[key];
      }
    },
    focusSelectedEmployee(state: EmployeesInterface, action: PayloadAction<EmployeeIdType>) {
      let employees = state.employees;
      let filteredEmployee = employees.filter((employee) => employee.employee_id==action.payload);
      if (filteredEmployee && filteredEmployee.length==1) state.selectedEmployee = filteredEmployee[0];
    },
    clearSelectedEmployee(state: EmployeesInterface) {
      state.selectedEmployee = { ...EmployeeDefaultValue }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesAsync.pending, (state) => {

      })
      .addCase(getEmployeesAsync.fulfilled, (state: EmployeesInterface, action) => {
        state.employees = action.payload;
        // console.log(action); 
      })

  }
})

export const { updateEmployee, createEmployeeManual, createEmployee, 
  updateSelectedEmployee, 
  focusSelectedEmployee,
  clearSelectedEmployee,
  removeEmployee,
} = EmployeeSlice.actions;
export default EmployeeSlice.reducer; 