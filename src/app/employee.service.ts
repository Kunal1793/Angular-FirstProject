import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from './Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private Http: HttpClient) { }

  getEmployees(){
    return this.Http.get<EmployeeModel[]>('http://dummy.restapiexample.com/api/v1/employees');

  }
  postData(EmployeeData: EmployeeModel) {
    return this.Http.post<EmployeeModel>('https://postman-echo.com/post', EmployeeData);
  }
}
