import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, public dataservice: DataService) {} // Inject Router and DataService in the constructor

  ngOnInit(): void {}
  navigateToDashboard(): void {
    // Logic to navigate to the dashboard
    this.router.navigate(['/dashboard']); // Ensure '/dashboard' is the correct route for your dashboard
  }

  addEmployee(): void {
    // Logic to navigate to Employee component for adding a new employee
    this.router.navigate(['/add-employee']); // Ensure the correct route
  }

  editEmployee(record: any): void {
    // Navigate to the edit-employee component with the selected record's details
    this.router.navigate(['/edit-employee', record.id], {
      queryParams: {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        phone: record.phone,
        address: record.address,
      },
    });
  }

  deleteEmployee(id: number): void {
    // Remove the employee record with the matching ID from the data
    this.dataservice.recordDetails = this.dataservice.recordDetails.filter(
      (record) => record.id !== id
    );
  }

  viewEmployee(record: any): void {
    // Logic to display employee details (optional, implement if needed)
  }

  logout(): void {
    // Clear session or authentication token
    localStorage.clear(); // Clear any stored data in local storage
    sessionStorage.clear(); // Optional: Clear session storage
    this.router.navigate(['/']); // Navigate to the login page
  }

  showManagerUserForm(): void {
    // Navigate to the Manager User component
    this.router.navigate(['/manager-user']);
  }
}
