import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  amount$: Observable<{id: number, amount: number}[]>
  
  constructor(private _productService: ProductService) {
    this.amount$ = this._productService.cartProducts$.asObservable().pipe(
      tap(data => console.log('Data received', data))
    )
  }

}
