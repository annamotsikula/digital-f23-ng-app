import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Student } from '../helpers/interfaces/app.interface';
import { Book } from '../helpers/interfaces/book.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}

  bookDetails: Book
  messageFromParent: string = "From Parent"
  msgFromChild: string = ""
  myFavBook: Book = {
    title:"Understanding ECMAScript 6",
    subtitle:"The Definitive Guide for JavaScript Developers",
    "author":"Nicholas C. Zakas",
    "published": new Date("2016-09-03T00:00:00.000Z"),
    "publisher":"No Starch Press",
    "pages":352,
    "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "website":"https://leanpub.com/understandinges6/read",
    img: "https://tutorialzine.com/media/2015/05/eloquent.png"
  }
  
  constructor() {
    this.bookDetails = {
      title:'Eloquent JavaScript, Third Edition',
      subtitle:'A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      published: new Date('2018-12-04T00:00:00.000Z'),
      publisher:'No Starch Press',
      pages:472,
      description:'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: "http://eloquentjavascript.net/",
      img: "https://tutorialzine.com/media/2015/05/eloquent.png"
    }
  }

  sendData() {
    this.messageFromParent = 'Sending data From Parent Component'
    
  }

  receiveData(msg: string) {
    alert(`Child Component has sent you message: ${msg}` )
  }



}
