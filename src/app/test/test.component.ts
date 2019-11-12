import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ShowMessage = false;
  Name: string = 'String Interpolation';
  Myname="Kunal";

  constructor() { }

  ngOnInit() {
  }

  Fruits = ['Apples', 'Cheeries','Banana', 'Strawberries','Pineapple']

  EventMethod() {
    this.ShowMessage = !this.ShowMessage; 

  }

}
