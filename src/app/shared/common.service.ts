import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //url:string="http://localhost:3000/Employee";

  addUrl:string="http://localhost:8083/addEmp";
  getAllUrl:string="http://localhost:8083/list";
  getEmpUrl:string="http://localhost:8083/singleEmp/";
  deleteUrl:string="http://localhost:8083/delete/";
  updateUrl:string="http://localhost:8083/update";
  commonUrl:string="http://localhost:8083/";
  constructor(private httpService:HttpClient) { }

  emp:Employee={
    id: 0,
    ename: '',
    email: '',
    mobile: '',
    designation: '',
    username: '',
    password: '',
    // repeat_password: ''
  }

  getAllData():Observable<Employee[]>
  {
     return this.httpService.get<Employee[]>(this.getAllUrl);
  }

  PostData(e:Employee):Observable<Employee>
  {
    return this.httpService.post<Employee>(this.addUrl + "/", e);
  }
  
  DeleteData(id:number)
  {
    return this.httpService.delete(this.deleteUrl+id)
  }

  patchData(e:Employee):Observable<Employee>
  {
    return this.httpService.put<Employee>(this.updateUrl,e)
  }
  getEmployee(id:number):Observable<Employee>
  {
    return this.httpService.get<Employee>(this.getEmpUrl+"/"+id);
  }
}
