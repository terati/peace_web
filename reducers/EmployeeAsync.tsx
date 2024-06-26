import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { createEmployee, removeEmployee, updateEmployee } from "./EmployeeReducer";


export const getEmployeesAsync = createAsyncThunk(
  'data/fetchEmployeesAsync',
  async () => {
    try {
      const res = await axios.get('/api/employees');
      return res.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
  }
)

const generateId = () => { return uuidv4(); }

const employeeValidator = (selectedEmployee: EmployeeType):ValidatorInterface => {
  let se = selectedEmployee;
  if (se.firstName.length==0 || se.lastName.length==0 || se.category.length==0) return {isValid:false}
  se.employee_id = generateId(); 
  const initials = se.firstName[0].toUpperCase() + se.lastName[0].toUpperCase();
  se.initials = initials;
  return {selectedEmployee:se, isValid: true};
}

export const createEmployeeAsync = createAsyncThunk(
  'data/createEmployeeAsync',
  async (employeeData, { dispatch }) => {
    // console.log(employeeData);
    employeeData.employee_id = generateId(); 
    dispatch(createEmployee(employeeData)) 
    try {
      const res = await axios.put('/api/employees', {...employeeData});
    } catch (error) {
      console.error('Error creating employee', error);
    }
  }
)

export const removeEmployeeAsync = createAsyncThunk(
  'data/removeEmployeeAsync',
  async (employee_id, { dispatch }) => {
    dispatch(removeEmployee());
    // console.log(employee_id);
    try {
      const res = await axios.delete('/api/employees', {
        params: { employee_id } 
      }
      ); 
      
    } catch (error) {
      console.error('Error removing resource', error); 
    }
  }
)
  
export const updateEmployeeAsync = createAsyncThunk(
  'data/updateEmployeeAsync',
  async (employeeData: any, { dispatch }) => {
    dispatch(updateEmployee(employeeData));
    try {
      console.log(employeeData);
      const res = await axios.patch('/api/employees', employeeData)
      console.log(res); 
    } catch (error) {
      console.error('Error updating resource', error);
    }

  }
)