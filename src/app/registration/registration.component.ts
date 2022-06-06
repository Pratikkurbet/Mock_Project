import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private forms:FormBuilder,private router:Router,public common:CommonService) { }

  RegistrationForm:FormGroup
  
   ngOnInit(): void 
  {
    this.RegistrationForm=this.forms.group(
      {
        ename:[''],
        email:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        // password_repeat:[''],
        password:['']
      }
    )
  }

  addEmployee(e:Employee)
  {
    e.ename=this.RegistrationForm.get('ename').value;
    e.email=this.RegistrationForm.get('email').value;
    e.mobile=this.RegistrationForm.get('mobile').value;
    e.designation=this.RegistrationForm.get('designation').value;
    e.username=this.RegistrationForm.get('username').value;
    // if ((this.RegistrationForm.get('password').value)===(this.RegistrationForm.get('password_repeat').value))
    // {
      e.password=this.RegistrationForm.get('password').value;
      alert('Employee Registered.');
      this.common.PostData(e).subscribe();
      // window.location.reload();
      this.router.navigate(['login']);
    // } 
    // else
    // {
    //   alert('Set your Password correctly!');
    //   this.router.navigate(['register']);
    //   window.location.reload();
    // }
  }
  callToLogin()
  {
    this.router.navigate(['login']);
  }
}

