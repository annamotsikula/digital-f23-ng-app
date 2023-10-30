import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, map, of, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/http.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent]
})
export class ProductDashboardComponent implements OnInit {
  productList: Product[] = [];
  @ViewChild('search') searchQuery: ElementRef
  constructor(private _productService: ProductService, private _router: Router, private _el: ElementRef) {
    this.searchQuery = this._el.nativeElement
    
  }
  ngOnInit(): void {
    this.getAllProduct();
  }

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.searchQuery.nativeElement, 'keyup').pipe(
      debounceTime(600),
      map((ev: KeyboardEvent) => ev.target as HTMLInputElement),
      map((target) => target.value),
      switchMap(value => this._productService.searchByKey(value)),
    )
    .subscribe(result => {
      console.log(result);
        this.productList = result
    })
  }
  getAllProduct() {
    this._productService.getProducts().pipe(
      tap(data => this.productList = data)
    ).subscribe()
  }

  onClick(status: 'DELETE' | 'VISIT', id: number) {
    status === 'DELETE' ? this.deleteProduct(id) : this.gotoDetails(id)
  }

   gotoDetails(productId:  number) {
    this._router.navigate([`main/products/${productId}`])
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(_ => {
      this.productList = this.productList.filter(i=> i.id !== id);
      alert('Product has successfully deleted')
    })
  }

  upateProduct(val: string, id: number) {
    this._productService.updateProduct(id, val).subscribe((result) => {
      alert('Successfully Updated')
      console.log(result)
    })
    

  }
}
