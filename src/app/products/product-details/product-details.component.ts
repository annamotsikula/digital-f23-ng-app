import { Component, OnInit } from '@angular/core';
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
  product!: Product
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
    this.routeId = Number(this._activatedRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.getSingleProduct(this.routeId)
  }

  getSingleProduct(id: number) {
    this._productService.getProductById(id).subscribe((data) => {
      this.product = data
    })
  }
}
