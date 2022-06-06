import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  constructor(private forms:FormBuilder,private locations:Location,private common:CommonService) { }

  updateForm:FormGroup
  ngOnInit(): void 
  {
    this.updateForm=this.forms.group(
      {
        id:[],
        ename:[''],
        email:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        password:['']
      }
    )
      this.editEmloyee();
  }

  editEmloyee()
  {
    let empObj:any=this.locations.getState();
    console.log(empObj.id);
    //console.log(empObj);
    if(empObj.id>0)
    {
      this.updateForm.get('id').setValue(empObj.id);
      this.updateForm.get('ename').setValue(empObj.ename);
      this.updateForm.get('email').setValue(empObj.email);
      this.updateForm.get('mobile').setValue(empObj.mobile);
      this.updateForm.get('designation').setValue(empObj.designation);
      this.updateForm.get('username').setValue(empObj.username);
      this.updateForm.get('password').setValue(empObj.password);
    }
  }

  onSubmit()
  {
    console.log(this.updateForm.value);
    this.common.patchData(this.updateForm.value).subscribe();
    this.locations.back();
  }

  goBack()
  {
    this.locations.back();
  }
}
