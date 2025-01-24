import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
OnLogin: any;
// OnLogin() {
// throw new Error('Method not implemented.');
// }
  username: string = '';
  password: string = '';
  
  correctUsername: string = 'admin';  // Expected username
  correctPassword: string = '123';    // Expected password

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      if (this.username === this.correctUsername && this.password === this.correctPassword) {
        this.router.navigate(['/dashboard']); // Navigate if credentials are correct
      } else {
        alert('Incorrect username or password!'); // Show error message
      }
    } else {
      alert('Please enter both username and password!'); // Check for empty fields
    }
  }
}