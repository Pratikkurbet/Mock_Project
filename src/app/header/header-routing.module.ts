import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { LoginComponent } from '../login/login.component';

 export const HeaderRoutes: Routes = [
  {
    path:'dashBoard',component:DashboardComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'contact',component:ContactUsComponent
  },
  {
    path:'login' ,component:LoginComponent
  },
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
  imports: [RouterModule.forChild(HeaderRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
