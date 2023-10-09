import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgLink = "https://i.redd.it/oktga8avhhv51.png"

  constructor(private _router: Router) {}

  ngOnInit(): void {
  }

  navigationData : {title: string, path: string}[] = [
    {
      title: 'Main',
      path: '/'
    },
    {
      title: 'Home',
      path: '/home'
    },
  ]

  gotoAuth() {
    this._router.navigate(['sign-in'])
  }
}
