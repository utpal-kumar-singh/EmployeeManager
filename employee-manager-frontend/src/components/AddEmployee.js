import React, { useState } from "react";
import { addEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";
console.log("Rendering AddEmployee component");

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    jobTitle: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      navigate("/employees");
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  return (
    <div className=" btn-btn container ">
      <h2>Add New Employee</h2>
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
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save
        </button>
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

export default AddEmployee;

