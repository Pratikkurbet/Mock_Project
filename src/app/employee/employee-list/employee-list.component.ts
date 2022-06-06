import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private common:CommonService,private router:ActivatedRoute,private locations:Location) { }
  
  employee:Employee;

  ngOnInit(): void 
  {
    //1.Snapshot way

    // let emp_id=parseInt(this.router.snapshot.paramMap.get('id'));
    // this.common.getEmployee(emp_id).subscribe(data=>
    //   {
    //     this.employeeObj=data;
    //   })

    //2.Observable Way
    this.router.paramMap.subscribe(param1=>
      {
        this.common.getEmployee(parseInt(param1.get('id'))).subscribe
        (data=>
          {
            this.employee=data;
          })
      })

  }
  getback()
  {
    this.locations.back();
  }
  
}
