import React from "react";

import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />

          <Route path="/edit/:id" element={<EditEmployee />} />

        </Routes>
        <ToastContainer position="top-center" />

      </div>
    </Router>

  );
}

export default App;
