// src/app/employee.model.ts

export interface Employee {
    id: number;         // Unique identifier for the employee (e.g., 1, 2, 3)
    firstName: string;  // First name of the employee (e.g., 'John')
    lastName: string;   // Last name of the employee (e.g., 'Doe')
    email: string;      // Email address of the employee (e.g., 'john.doe@example.com')
    phone: string;      // Phone number of the employee (e.g., '1234567890')
    address: string;    // Address of the employee (e.g., '123 Main St')
  }
  