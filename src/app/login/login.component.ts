// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  

  constructor(private router: Router) {}

  // onLogin(loginForm: any) {
  //   if (loginForm.valid) {
  //     // Handle login logic
  //     console.log('Login successful');
  //     // Navigate to a different page after successful login, for example:
  //     this.router.navigate(['/dashboard']);
  //   }
  // }

onLogin() {
  if (this.username && this.password) {
    if (this.username === this.username && this.password === this.password) {
      
      // Create a user object based on the login credentials
      const newUser = {
        firstName: 'Default First Name',
        lastName: 'Default Last Name',
        username: this.username,
        description: 'Default description',
        password: this.password
      };

      // Retrieve existing users from localStorage
      const storedUsers = localStorage.getItem('users');
      let users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if the user already exists based on the username
      const userExists = users.some((user: any) => user.username === this.username);

      if (!userExists) {
        // Add the new user only if it doesn't already exist
        users.push(newUser);

        // Save the updated users list to localStorage
        localStorage.setItem('users', JSON.stringify(users));
      }

      // Navigate to the dashboard after successful login
      this.router.navigate(['/dashboard']);
      
    } else {
      alert('Incorrect username or password!');
    }
  } else {
    alert('Please enter both username and password!');
    }
  }
}