import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';  // Ensure FormsModule is imported
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { TableModule } from 'primeng/table'; // Ensure correct PrimeNG modules are imported
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { Toast, ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    EmployeeComponent,
    ManagerUserComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // FormsModule here
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    TableModule, // PrimeNG Table module
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
