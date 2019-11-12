import { Injectable } from '@angular/core'; 
// that is, it is used by others. Hence, It is Injectable. 

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  AddResult: number;
  SubtractResult: number;
  DivisonResult: number;
  MultiplyResult: number;

  constructor() { }

  AddTwoNumbers(number1: number, number2: number)
  {
    this.AddResult = number1 + number2;
    return this.AddResult;
  }

  SubtractTwoNumbers(number1: number, number2: number)
  {
    this.SubtractResult = number1 - number2;
    return this.SubtractResult;
  }

  MultiplyTwoNumbers(number1: number, number2: number)
  {
    this.MultiplyResult = number1 * number2;
    return this.MultiplyResult;

  }

  DivideTwoNumbers(number1: number, number2: number) {
    this.DivisonResult = number1 / number2;
    return this.DivisonResult;

  }
}
