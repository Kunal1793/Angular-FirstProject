import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../Employee.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  model: any = {};

  EmployeeName: string;
  EmployeeTechnology: string; 
  EmployeeAge: number;
  ShowData = false;
  
  StartDate: Date;
  minDate: Date;
  maxDate: Date;

  EmployeesArray: EmployeeModel[] = [];

  myEmployees: EmployeeModel = {
    id: "1234",
    employee_name: "Kalya",
    employee_salary: "500",
    employee_age: "34"
  }


  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit() {
  }
  
  onSubmit(EmployeeDetails: NgForm) {
    this.ShowData = !this.ShowData;
    this.EmployeeName = EmployeeDetails.value.Name;
    this.EmployeeTechnology = EmployeeDetails.value.Technology;
    this.EmployeeAge = EmployeeDetails.value.Age;
    EmployeeDetails.resetForm();
  }

}
