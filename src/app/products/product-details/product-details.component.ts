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
export class ProductDetailsComponent implements OnInit{
  routeId!: number
  product!: Product;

  cart: FormGroup
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
    this.routeId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.cart = new FormGroup({
      amount: new FormControl(null, [Validators.required, Validators.max(5), Validators.min(1)]),
      productId: new FormControl(this.routeId),
      category: new FormControl('')
    })
  }

  ngOnInit() {
    this.getSingleProduct(this.routeId)
  }

  getSingleProduct(id: number) {
    this._productService.getProductById(id).subscribe((data) => {
      this.product = data;
      // this.cart.get('amount')?.setValidators(Validators.max(data.stock))
      this.cart.get('productId')?.setValue(data.id);
      this.cart.get('category')?.setValue(data.category)
      console.log(this.cart)
    })
  }

  changeOrderNumber(status: '-' | '+') {
    const amount = this.cart.get('amount') as FormControl;
    if(status === '-') {
      amount.patchValue(amount.value - 1)
    } else {
      amount.patchValue(amount.value + 1)
    }

    
  }
}
