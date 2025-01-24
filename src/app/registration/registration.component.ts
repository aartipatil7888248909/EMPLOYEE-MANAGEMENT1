import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  description: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.firstName && this.lastName && this.username && this.description && this.password) {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        description: this.description,
        password: this.password,

      };
      let newObject:any = localStorage.getItem("object");

      let userObj=(JSON.parse(newObject));
      userObj=userObj?userObj:[]
      userObj.push(newUser)
      localStorage.setItem("object", JSON.stringify(userObj));
      alert('Registration Successful!');
      this.router.navigate(['/login'])  // Pass data as state
    } else {
      alert('Please fill in all fields');
    }
  }
}
