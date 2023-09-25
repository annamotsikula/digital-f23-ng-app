import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgLink = "https://i.redd.it/oktga8avhhv51.png"
  ngOnInit(): void {
    // console.log('HEADER On init')
  }

}
