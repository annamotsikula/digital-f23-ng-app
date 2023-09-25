import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Student } from '../app.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  decimalNumber : number = 20;
  isWinter: boolean = false;
 
  ids: number[] = [2,3,4,5,6,7]
 
  student: Student = {
     age: 21,
     name: 'Kate',
     isStudent: true,
     gpa: 3.12
 
  }
  personData = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  graduated: false,
  subject: null || "",
  isWebDev: false
  }
  constructor() {
   
  }
  @ViewChild('pEl') pElement!: ElementRef




  ngOnInit(): void {
    console.log(this.pElement)
  }
  ngAfterViewInit(): void {
    const p = this.pElement.nativeElement as HTMLElement
    p.style.backgroundColor = 'red'
    p.style.fontSize = '16px'
  }

  edit() {
  console.log(this.personData)
  }
  onKeyUp(ev: Event) {
    const event = ev.target as HTMLInputElement
    console.log("Event Triggered", event.value)
  }

  selectSubject(ev: any) {
    const selected = ev.target as HTMLSelectElement;
    this.personData.subject = selected.value

  }



}
