import { Injectable } from '@angular/core';
import bookdata from '../books.json'
import { Book } from '../book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _books: Book[] = []
  constructor() { 
    this._books = JSON.parse(JSON.stringify(bookdata))
    this._books.map((book, index) => book.id = index)
    console.log(this._books)
  }

  getBookData(): Book[] {
    return this._books
  }

  getBookById(id: number): Book | undefined {
    const foundBook = this._books.find(i=> i.id === id)
    if(!foundBook) {
      console.error(`The book with id: ${id} does not exist`)
      return;
    }
    return foundBook
  }
}
