import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

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
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Employee
      </button>

      <table className="min-w-full border">
       <thead>
                 <tr className="bg-gray-200">
                   <th className="py-2 px-4 border">ID</th>
                   <th className="py-2 px-4 border">Name</th>
                   <th className="py-2 px-4 border">Email</th>
                   <th className="py-2 px-4 border">Job Title</th>
                   <th className="py-2 px-4 border">PhoneNumber</th> {/* Added header */}
                   <th className="py-2 px-4 border">Actions</th>
                 </tr>
               </thead>
               <tbody>
                 {employees.map((emp) => (
                   <tr key={emp.id}>
                     <td className="py-2 px-4 border">{emp.id}</td>
                     <td className="py-2 px-4 border">{emp.name}</td>
                     <td className="py-2 px-4 border">{emp.email}</td>
                     <td className="py-2 px-4 border">{emp.jobTitle}</td>
                     <td className="py-2 px-4 border">{emp.phoneNumber}</td> {/* Added row */}
                     <td className="py-2 px-4 border">
                       <button
                  onClick={() => handleEdit(emp.id)}
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
