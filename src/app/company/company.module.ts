import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';

console.log("company module runs");

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
