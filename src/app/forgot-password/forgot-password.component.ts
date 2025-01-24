import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  username: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  onReset() {
    if (this.username && this.newPassword) {
      alert(`Password has been successfully reset for ${this.username}`);

      this.router.navigate(['/login']); // Redirect to login page
    } else {
      alert('Please fill in all required fields!');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}