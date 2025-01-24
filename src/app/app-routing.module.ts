// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { EmployeeComponent } from './employee/employee.component'; // Add EmployeeComponent import
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { ManagerUserComponent } from './manager-user/manager-user.component'; // Import the Manager User Component


// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },  // Default route
//   { path: 'login', component: LoginComponent },         // Login route
//   { path: 'register', component: RegistrationComponent }, // Registration route
//   { path: 'forgot-password', component: ForgotPasswordComponent }, // Forgot Password
//   { path: 'dashboard', component: DashboardComponent }, // Dashboard route
//   { path: 'add-employee', component: EmployeeComponent }, // Add Employee route
//   { path: 'edit-employee/:id', component: EmployeeComponent }, // Edit Employee route
//   { path: 'edit-user/:id', component: EditUserComponent }, // Replace with the actual component 
//   { path: 'manager-user', component: ManagerUserComponent },
//   { path: '**', redirectTo: 'manager-user' } ,                  // Wildcard route (always last)
  
  
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ManagerUserComponent } from './manager-user/manager-user.component'; // Corrected import

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login as default route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'register', component: RegistrationComponent }, // Registration route
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Forgot password route
  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
  { path: 'add-employee', component: EmployeeComponent }, // Add employee route
  { path: 'edit-employee/:id', component: EmployeeComponent }, // Edit employee route
  { path: 'edit-user/:id', component: EditUserComponent }, // Edit user route
  { path: 'manager-user', component: ManagerUserComponent }, // Manage users route
  { path: '**', redirectTo: 'login' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
