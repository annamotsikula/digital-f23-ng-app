import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Student } from './helpers/interfaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // OR: 
  // template: `<h2>This is second header</h2>`
  // styles: ['h2 { color: red }']
})
export class AppComponent 
// implements 
  // OnInit, 
  // OnChanges, 
  // DoCheck, 
  // AfterContentInit, 
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy 
  {
  title = 'Angular App!';
  constructor() {
  }
  // LifeCycle Hooks 

  // ngOnInit(): void {
  //   console.log('OnInit')
  // }
  // ngAfterContentInit(): void {
  //   console.log('After Content Init')
    
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After Content Checked')
    
  // }
  // ngAfterViewChecked(): void {
  //   console.log('After View Checked')
    
  // }
  // ngAfterViewInit(): void {
  //   console.log('After View Init')
    
  // }
  // ngDoCheck(): void {
  //   console.log('DoCheck')
    
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(changes['isWinter'].)
  //   console.log('On Changes')
    
  // }
  // ngOnDestroy(): void {
  //   console.log('On Destroy')
    
  // }
}
