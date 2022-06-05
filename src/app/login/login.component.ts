import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formbuilder:FormBuilder,public common:CommonService) { }

  LoginForms:FormGroup

  empList:Employee[];
  emp:Employee;
  ngOnInit(): void
  {
    this.LoginForms=this.formbuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  
  submitCall()
  {
    this.common.getAllData().subscribe
    (abc=>
      abc.forEach(x =>
      {
        if (x.username===this.LoginForms.get('username').value && x.password===this.LoginForms.get('password').value)
        {
          this.emp==x;
          this.router.navigate(['login/header']);
        }
      })
    );
    // if(this.emp==null)
    // {
    //   alert('Employee not found');
    //   window.location.reload();
    // }
  }

  reset()
  {
    this.LoginForms.reset();
  }
}

