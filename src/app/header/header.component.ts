import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageSevice } from '../core/services/storage.service';
import { authToken } from '../core/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends LocalStorageSevice implements OnInit  {
  imgLink = "https://i.redd.it/oktga8avhhv51.png"

  constructor(private _router: Router) { super(); }

  ngOnInit(): void {
  }

  navigationData : {title: string, path: string}[] = [
    {
      title: 'Books',
      path: '/main/books'
    },
    {
      title: 'Products',
      path: '/main/products'
    },
  ]

  gotoAuth() {
    this._router.navigate(['sign-in'])
  }

  logOut() {
    // this.removeItem(authToken);
    this.clearAll();
    this._router.navigate([''])
    
  }
}
