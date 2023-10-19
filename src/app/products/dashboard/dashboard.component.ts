import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productList: Product[] = []
  constructor(private _productService: ProductService, private _router: Router) {
    
  }
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this._productService.getProducts().pipe(
      tap(data => this.productList = data)
    ).subscribe(() => {
      console.log('Data has arrived');
      // this.productList = data.products

    })
  }

  onClick(status: 'DELETE' | 'VISIT', id: number) {
    status === 'DELETE' ? this.deleteProduct(id) : this.gotoDetails(id)
  }

   gotoDetails(productId:  number) {
    this._router.navigate([`main/products/${productId}`])
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(console.log)
  }

  upateProduct(val: string, id: number) {
    this._productService.updateProduct(id, val).subscribe((result) => {
      alert('Successfully Updated')
      console.log(result)
    })
    

  }
}
