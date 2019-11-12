import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import {EmployeeModel} from '../Employee.model';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,  AfterViewInit{

  CompaniesEmployees: EmployeeModel[];
  isLoggedIn = false;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employeeService.getEmployees().subscribe(
    //   (EmployeeData) => { this.CompaniesEmployees = EmployeeData; });
    console.log('Ng on in it Called!');

  }

  ngAfterViewInit() {
    console.log('Component has been Initialized!');
  }

  ShowEmployees() {
    this.isLoggedIn = true;

  }

}
