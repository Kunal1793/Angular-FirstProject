import { Component } from '@angular/core';
import {Employee} from './Employee';

@Component({
  selector: '[app-root]', // Square Brackets is an important feature. Check index.html file.

  templateUrl: './app.component.html',
  // template: `<h1>Welcome to Angular and React </h1>
  //             <p>Atlanta-Georgia</p>`, //---> Inline template has higher preference over templateURL

  styleUrls: ['./app.component.css'] // Sqaure brackets means that we can have multiple CSS files.
})
export class AppComponent {
  title = 'ARSENAL';
  NewTitle = "PREMIER LEAGUE WINNERS";
  Name1: string

  MyArray: number[] = [1,2,3,4,5,6];

  MyStringArray: string[] = ["A", "B", "C"];

  one: number = 30;
  two: number = 60;

  Employee: any= {
    Name: "Cristiano Ronaldo", 
    Club: "Juventus", 
    Position: "Striker", 
    Country: "Portugal"
  };

  CompanyEmployees: Employee[] = [
    {Name: "Lionel Messi", ID: 10, Salary: 500, Department: "Barcelona"},
    {Name: "Cesc Fabregas", ID: 4, Salary: 400, Department: "AS Monaco"},
    {Name: "Thierry Henry", ID: 14, Salary: 300, Department: "Arsenal"},
  ];

  myVar: string = "B";



  Greeting(title2: string) {
    return title2; 

  }
}
