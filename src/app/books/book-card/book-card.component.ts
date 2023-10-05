import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/core/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
 @Input() book!: Book 
 @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>()

 onClick() {
  this.clickEmitter.emit()   
 }
}
