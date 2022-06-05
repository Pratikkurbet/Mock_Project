import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private common:CommonService,private router:Router) { }
  empList:Employee[];
  showDiv:boolean=false;

  emp1:Employee={
    id: 0,
    ename: '',
    email: '',
    mobile: '',
    designation: '',
    username: '',
    repeat_password: '',
    password: ''
  }
  ngOnInit(): void 
  {
    this.common.getAllData().subscribe((data:Employee[])=>
    {
      this.empList=data;
    })
  }
  deleteData(id:number)
  {
    this.common.DeleteData(id).subscribe();
    window.location.reload();
  }

  editEmployeeCall(e:Employee)
  {
    console.log(e);
    this.showDiv=!this.showDiv;
    // this.common.emp=Object.assign({},e)
    this.emp1=Object.assign({},e);
  }

  updateEmployee(e:Employee)
  {
    console.log(e.id);
    
    if(e.id==0)
    {
      this.common.PostData(e).subscribe();
    }
    else
    {
      this.common.patchData(e).subscribe();
    }
    window.location.reload();
  }
  
}
