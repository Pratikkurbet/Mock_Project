import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url:string="http://localhost:3000/Employee";
  constructor(private httpService:HttpClient) { }

  getAllData()
  {
    this.httpService.get(this.url);
  }

  PostData(e:Employee)
  {
    this.httpService.post(this.url+"/",e);
  }
  
  DeleteData(id:number)
  {
    this.httpService.delete(this.url+"/"+id)
  }
}
