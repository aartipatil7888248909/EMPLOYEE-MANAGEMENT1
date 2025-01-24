import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css'],
})
export class ManagerUserComponent implements OnInit {
  users: any[] = []; // Array to store user data

  constructor() {}

  ngOnInit() {
    this.users = this.getStoredUsers();
  }

  getStoredUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  onSubmit(userForm: any) {
    if (userForm.valid) {
      const newUser = {
        id: new Date().getTime(), // Assign a unique ID based on the current timestamp
        firstName: userForm.value.firstName,
        lastName: userForm.value.lastName,
        address: userForm.value.address,
        phone: userForm.value.phone,
      };
      this.users.push(newUser);
      this.updateStoredUsers();
      userForm.reset();
    }
  }

  updateStoredUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(user: any) {
    const updatedFirstName = prompt(`Editing user: ${user.firstName}. Enter new first name:`, user.firstName);
    if (updatedFirstName !== null) user.firstName = updatedFirstName;

    const updatedLastName = prompt('Enter new last name:', user.lastName);
    if (updatedLastName !== null) user.lastName = updatedLastName;

    const updatedAddress = prompt('Enter new address:', user.address);
    if (updatedAddress !== null) user.address = updatedAddress;

    const updatedPhone = prompt('Enter new phone number:', user.phone);
    if (updatedPhone !== null) user.phone = updatedPhone;

    this.updateStoredUsers();
    alert('User updated successfully!');
  }

  deleteUser(userId: any) {
    if (confirm(`Are you sure you want to delete this user?`)) {
      this.users = this.users.filter((user) => user.id !== userId);
      this.updateStoredUsers();
    }
  }
}
