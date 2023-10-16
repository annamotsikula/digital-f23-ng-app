import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: Product[] = []
  constructor(private _productService: ProductService) {
    
  }
  ngOnInit(): void {
    this.getAllProduct();
    console.log('Here:)')
  }

  getAllProduct() {
    this._productService.getProducts().subscribe(data => {
      console.log;
      this.productList = data.products
    })
  }
}
