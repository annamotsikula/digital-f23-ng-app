import { Component, Input } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent {
  @Input() rate: number = 0
  
  ngOnInit() {
    // Array.from(this.rate.score, (i) => {val: i})
    // const result = this.generateStar(3.12);
    // console.log(result)

    /* 
    [
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-half'
    ]
    */

  }

  

 
}
