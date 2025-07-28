import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

export const getAllEmployees = () => axios.get(`${BASE_URL}/all`);

export const getEmployeeById = (id) => axios.get(`${BASE_URL}/find/${id}`);

export const addEmployee = (employee) => axios.post(`${BASE_URL}/add`, employee);

export const updateEmployee = (employee) => axios.put(`${BASE_URL}/update`, employee);

export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
