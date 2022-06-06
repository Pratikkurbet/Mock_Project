import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path:'',component:EmployeeComponent,
    children:[
      {
        path:'emplist/:id', component:EmployeeListComponent
      }
    ]
  },
  {
    path:'empUpdate',component:EmployeeUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
