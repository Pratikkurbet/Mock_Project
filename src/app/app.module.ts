import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeModule } from './employee/employee.module';
import { CompanyModule } from './company/company.module';
import { HttpClientModule } from '@angular/common/http';

console.log("app module runs");
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // EmployeeModule,
    // CompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
