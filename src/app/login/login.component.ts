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
  ngOnInit(): void
  {
    this.LoginForms=this.formbuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  
  submitCall()
  {
    console.log(this.LoginForms.get('username').value);
    console.log(this.LoginForms.get('password').value);
    this.router.navigate(['login/header']);
  }

  reset()
  {
    this.LoginForms.reset();
  }
}
