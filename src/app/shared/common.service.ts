import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url:string="http://localhost:3000/Employee";
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
     return this.httpService.get<Employee[]>(this.url);
  }

  PostData(e:Employee):Observable<Employee>
  {
    return this.httpService.post<Employee>(this.url + "/", e);
  }
  
  DeleteData(id:number)
  {
    return this.httpService.delete(this.url+"/"+id)
  }

  patchData(e:Employee):Observable<Employee>
  {
    return this.httpService.put<Employee>(this.url+"/"+e.id,e)
  }
  getEmployee(id:number):Observable<Employee>
  {
    return this.httpService.get<Employee>(this.url+"/"+id);
  }
}
