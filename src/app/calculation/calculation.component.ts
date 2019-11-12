import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {


  // Injecting the Service
  // We are just using the refrence.
  // We are not creating any object.
  constructor(private CalculationService: CalculationService) { }

  Add: number;
  Subtract: number;
  Multiply: number;
  Divide: number;

  AddNumbers(FirstNumber: number, SecondNumber: number) {
    this.Add = this.CalculationService.AddTwoNumbers(FirstNumber, SecondNumber);
  }

  SubtractNumbers(FirstNumber: number, SecondNumber: number) {
    this.Subtract = this.CalculationService.SubtractTwoNumbers(FirstNumber, SecondNumber);
  }

  DivideNumbers(FirstNumber: number, SecondNumber: number) {
    this.Divide = this.CalculationService.DivideTwoNumbers(FirstNumber, SecondNumber);
  }

  MultiplyNumbers(FirstNumber: number, SecondNumber: number) {
    this.Multiply = this.CalculationService.MultiplyTwoNumbers(FirstNumber, SecondNumber);
  }

  ngOnInit() {
  }

}
