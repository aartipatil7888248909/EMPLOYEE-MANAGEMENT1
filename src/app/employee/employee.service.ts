import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model'; // Assuming you have an Employee model
import { HttpClient } from '@angular/common/http'; // If you're making HTTP requests
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210', address: '456 Elm St' },
    { id: 3, firstName: 'Robert', lastName: 'Brown', email: 'robert.brown@example.com', phone: '5551234567', address: '789 Oak St' },
  ];

  constructor(private http: HttpClient,public dataservice:DataService) {}
  

  // Fetch all employees
  getEmployees(): Observable<Employee[]> {
    return of(this.employees); // You can replace this with an HTTP request to a backend API
    // Example: return this.http.get<Employee[]>('your-api-endpoint');
  }

  // Get a specific employee by ID
  getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee); // Replace with an HTTP request if needed
  }

  // Add a new employee
  addEmployee(employee: Employee): Observable<Employee> {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
    this.dataservice.addEmployee(employee);
    return of(employee); // Replace with an HTTP POST request if needed
  }

  // Update an existing employee
  updateEmployee(id: number, updatedEmployee: Employee): Observable<Employee | undefined> {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      this.employees[employeeIndex] = updatedEmployee;
      return of(updatedEmployee); // Replace with an HTTP PUT request if needed
    }
    return of(undefined); // Replace with proper error handling
  }

  // Delete an employee
  deleteEmployee(id: number): Observable<boolean> {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
      return of(true); // Replace with an HTTP DELETE request if needed
    }
    return of(false);
  }
}
