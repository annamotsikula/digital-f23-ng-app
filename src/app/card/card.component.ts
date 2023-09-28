import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from '../helpers/interfaces/book.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
 @Input() book!: Book
 @Input() message: string = "Child Component"

 @Output() signal: EventEmitter<string> = new EventEmitter<string>()


 ngOnInit() {
  // console.log(`Initializing message: ${this.message}`)

 }

 ngOnChanges(changes: SimpleChanges) {
  console.log(`Change message: ${this.message}`)
  console.log(changes['message'])

 }

 sendBack() {
  console.log(this.message)
  this.signal.emit(this.message)
 }
}
