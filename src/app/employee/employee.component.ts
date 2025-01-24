// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { EmployeeService } from './employee.service'; // Import the service
// import { Employee } from './employee.model';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css'],
// })
// export class EmployeeComponent implements OnInit {
//   employeeForm: FormGroup;
//   isEditMode: boolean = false;
//   employeeId: number | null = null;

//   // Mock employee data
//   employees = [
//     { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210', address: '456 Elm St' },
//     { id: 3, firstName: 'Robert', lastName: 'Brown', email: 'robert.brown@example.com', phone: '5551234567', address: '789 Oak St' },
//     // Add more employees if needed
//   ];

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     public dataservice:DataService,
//   ) {
//     this.employeeForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       address: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//     // Retrieve employee ID from route params for editing
//     this.route.params.subscribe((params) => {
//       this.employeeId = +params['id']; // Get employee ID from URL

//       if (this.employeeId) {
//         this.isEditMode = true; // Set to edit mode if ID is present
//         this.loadEmployeeData(this.employeeId); // Load data for editing
//       }
//     });
//   }

//   loadEmployeeData(id: number): void {
//     const employee = this.employees.find((emp) => emp.id === id);
//     if (employee) {
//       this.employeeForm.patchValue(employee); // Fill the form with the employee data
//     }
//   }

//   onSubmit(): void {
//     if (this.employeeForm.valid) {
//       const formData = this.employeeForm.value;

//       if (this.employeeId) {
//         // Update employee data
//         // const employeeIndex = this.employees.findIndex((emp) => emp.id === this.employeeId);
//         // if (employeeIndex !== -1) {
//         //   this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...formData };
//         // }
//         this.dataservice.updateEmployee({
//           id:this.employeeId,...formData
//         })
//         this.employeeId=0;
//       } else {
//         // Add new employee
//         this.dataservice.addEmployee(formData);
//       }
      

//       this.router.navigate(['/dashboard']); // Redirect back to the dashboard after submission
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api'; // Import MessageService
import { EmployeeService } from './employee.service'; // Import the service
import { Employee } from './employee.model';
import { DataService } from '../data.service';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService], // Provide MessageService
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode: boolean = false;
  employeeId: number | null = null;
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService,
    private messageService: MessageService // Inject MessageService
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeId = +params['id'];
      if (this.employeeId) {
        this.isEditMode = true;
        this.loadEmployeeData(this.employeeId);
      }
    });
  }

  loadEmployeeData(id: number): void {
    const employee = this.dataService.getEmployeeById(id);
    if (employee) {
      this.employeeForm.patchValue(employee);
    } else {
      console.error(`Employee with ID ${id} not found`);
    }
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;

      if (this.isEditMode && this.employeeId) {
        this.dataService.updateEmployee({ id: this.employeeId, ...formData });
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee updated successfully!' });
      } else {
        this.dataService.addEmployee(formData);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New employee added successfully!' });
      }

      this.resetForm();
      this.router.navigate(['/dashboard']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill out all fields correctly before submitting.' });
      this.employeeForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.employeeForm.reset();
    this.isEditMode = false;
    this.employeeId = null;
    this.formSubmitted = false;
  }
}
