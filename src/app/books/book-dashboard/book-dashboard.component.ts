import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookService } from 'src/app/core/services/book.service';
import { LocalStorageSevice } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  bookArray: Book[] = []
  bookid!: number | null
  constructor(private _service: BookService, private _storageService: LocalStorageSevice) {
  
  }

  
  ngOnInit(): void {
    this.bookArray = this.getBooks();
    // this._storageService.setItem('my fav book', this.bookArray[0])
  }

  visitLink(link: string) {
    window.open(link, '_blank')
   }
 
   getBooks() {
     return this._service.getBookData()
   }
 
   searchBook() {
     if(this.bookid) {
       const book = this._service.getBookById(this.bookid)
       console.log(book)
       this.bookid = null
     }
   }
}
