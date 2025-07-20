package com.utpal.employeemanager.service;

import com.utpal.employeemanager.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepo EmployeeRepo;
@Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        EmployeeRepo = employeeRepo;
    }
}
