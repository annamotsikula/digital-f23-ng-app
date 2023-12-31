import { Component } from '@angular/core';
import { Observable, Subscription, flatMap, forkJoin, mergeMap, of, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts : Product[] = []
  cartProductsSubs$!: Subscription;
  totalPrice!: number
  constructor(private _productService: ProductService) {
    this._productService.cartProducts$.pipe(
      switchMap(res => this.getCartProducts(res))
    )
    .subscribe(data => {
      this.cartProducts = data;
      if(data) {
       this.totalPrice = this.cartProducts.reduce((sum, product) => 
          sum + product.price
        , 0)
      }
      console.log(data)
      
      // data.forEach(i => {
      //   this._productService.getProductById(i.id)
      // })
    })
  }

ngOnInit() {


}
  getCartProducts(data: {id: number, amount: number}[]) {
    const observables: Observable<Product>[] = [];
    data.map(i=> observables.push(this._productService.getProductById(i.id)));
    return forkJoin(observables)
  
  }

  ngOnDestroy() {
    if (this.cartProductsSubs$) {
      this.cartProductsSubs$.unsubscribe()
    }
  }

}


