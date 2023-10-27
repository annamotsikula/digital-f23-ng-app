import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  routeId!: number
  product!: Product;
  cart: FormGroup
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
    this.cart = new FormGroup({
      amount: new FormControl(1, [Validators.required, Validators.max(5), Validators.min(1)]),
      productId: new FormControl(this.routeId),
      category: new FormControl('')
    })
    this.resolveData(this._activatedRoute.snapshot.data['productDetails'])
  }
 
  resolveData(data: Product) {
    this.product = data;
    this.cart.get('productId')?.setValue(data.id);
    this.cart.get('category')?.setValue(data.category)
  }

  changeOrderNumber(status: '-' | '+') {
    const amount = this.cart.get('amount') as FormControl;
    if(status === '-') {
      amount.patchValue(amount.value - 1)
    } else {
      amount.patchValue(amount.value + 1)
    }

    
  }

  addToCart() {
    console.log(this.cart, 'Sending Incremental value to Cart');
    const { productId, amount } = this.cart.value
    const cartItems = this._productService.cartProducts$.getValue();
    cartItems.push({id: productId, amount})
    this._productService.cartProducts$.next(cartItems)
  }
}
