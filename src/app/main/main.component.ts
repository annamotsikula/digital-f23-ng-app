import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Student } from '../app.interface';
import { Book } from '../core/book.interface';
import bookdata from '../core/books.json'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  bookJSON = {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "imageLink": "https://m.media-amazon.com/images/I/81jmppwxtSL._AC_UF1000,1000_QL80_.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
    "year": 1835,
    "price": 10,
    "quantity": 4,
    "description": "Lorem ipsum dolor sit amet. Aut sunt totam aut optio dolores id quia odio non illum aliquid aut possimus officiis aut perferendis temporibus. Sit consequatur inventore ut cumque esse ut iusto maxime. Et iure rerum qui praesentium consequuntur ut voluptatum tempore et fugiat consequatur. Ut odio ipsam eum velit culpa ut reiciendis blanditiis ea numquam velit.",
    "isOnSale": true
  }
  bookArray: Book[] = bookdata
  bookObj!: Book;
  

  customNumber: number = 3.7845452542
  title: string = 'Angular tutor lecture N:5'
  today: Date = new Date()

  constructor() {
    this.bookObj = JSON.parse(JSON.stringify(this.bookJSON))
    console.log(this.bookArray)
  }

  visitLink(link: string) {
   window.open(link, '_blank')
    
  }
}
