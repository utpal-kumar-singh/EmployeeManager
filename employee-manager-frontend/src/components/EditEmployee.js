import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../services/employeeService";
import { useNavigate, useParams } from "react-router-dom";
console.log("Rendering AddEmployee component");

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    jobTitle: "",
    phoneNumber: "",
    employeeCode: ""
  });

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.error("Failed to load employee:", error);
      }
    };

    loadEmployee();
  }, [id]);



  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(employee);
      navigate("/employees");
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };


  return (
    <div className="container mt-4">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Job Title:</label>
          <input
            type="text"
            className="form-control"
            name="jobTitle"
            value={employee.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>PhoneNumber:</label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/employees")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
