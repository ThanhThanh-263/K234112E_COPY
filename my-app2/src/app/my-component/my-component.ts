import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {

  // Variable
  myVar: string = 'Hello Angular';

  // Function returning the variable
  getMyVar(): string {
    return this.myVar;
  }
}
