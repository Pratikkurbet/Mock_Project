import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyComponent } from './company/company/company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderRoutes } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'login/register',component:RegistrationComponent
  },
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'login/header',component:HeaderComponent,children:HeaderRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
