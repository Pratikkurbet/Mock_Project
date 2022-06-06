import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public common:CommonService) { }

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
}
