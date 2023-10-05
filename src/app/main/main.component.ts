import { Component, OnInit } from '@angular/core';
import { Book } from '../core/book.interface';
import bookdata from '../core/books.json'
import { BookService } from '../core/services/book.service';
import { LocalStorageSevice } from '../core/services/storage.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit {
  bookArray: Book[] = []
  bookid!: number | null
  constructor(private _service: BookService, private _storageService: LocalStorageSevice) {
  
  }

  ngOnInit(): void {
    this.bookArray = this.getBooks();
    this._storageService.setItem('my fav book', this.bookArray[0])
    
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
