import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  userId: number | null = null;

  // Mock user data
  users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210', address: '456 Elm St' },
    { id: 3, firstName: 'Robert', lastName: 'Brown', email: 'robert.brown@example.com', phone: '5551234567', address: '789 Oak St' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Retrieve the userId from the route parameters
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Get the user ID from the URL
      if (this.userId) {
        this.loadUserData(this.userId);
      }
    });
  }

  loadUserData(id: number): void {
    // Find user data by id (replace with real service call)
    const user = this.users.find(u => u.id === id);
    if (user) {
      this.editUserForm.patchValue(user); // Populate the form with existing user data
    }
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      const updatedData = this.editUserForm.value;
      // Handle the logic for updating the user (e.g., send to backend)
      console.log('Updated User:', updatedData);

      // Redirect back to dashboard or user list
      this.router.navigate(['/dashboard']);
    }
  }
}
