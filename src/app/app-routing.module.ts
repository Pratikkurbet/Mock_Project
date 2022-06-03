import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyComponent } from './company/company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'company',
    loadChildren:()=>
    import('src/app/company/company.module').then(abc=>abc.CompanyModule)
  },
  {
    path:'employee',
    loadChildren:()=>
    import('src/app/employee/employee.module').then(abc=>abc.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
