import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id);
        loadEmployees(); // reload list
      } catch (error) {
        console.error("Failed to delete employee:", error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="section-title">Employee List</h2>
      <button
        onClick={() => navigate('/add')}
        className="button button-add "
      >
        Add Employee
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {employees.map((emp) => (
          <div key={emp.id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{emp.name}</h2>
            <p><span className="font-semibold">ID:</span> {emp.id}</p>
            <p><span className="font-semibold">Email:</span> {emp.email}</p>
            <p><span className="font-semibold">Job Title:</span> {emp.jobTitle}</p>
            <p><span className="font-semibold">Phone:</span> {emp.phoneNumber}</p>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEdit(emp.id)}
               className="button button-add "
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(emp.id)}
               className="button button-add "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EmployeeList;
