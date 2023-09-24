import { Component } from '@angular/core';
import { Student } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // OR: 
  // template: `<h2>This is second header</h2>`
  // styles: ['h2 { color: red }']
})
export class AppComponent {
  title = 'ng-test-app-123-123';

  decimalNumber : number = 20;
  isWinter: boolean = false;

  ids: number[] = [2,3,4,5,6,7]

  student: Student = {
    age: 21,
    name: 'Kate',
    isStudent: true,
    gpa: 3.12

  }


}
