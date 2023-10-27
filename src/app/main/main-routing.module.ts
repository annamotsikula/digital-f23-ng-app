import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductDashboardComponent } from '../products/dashboard/dashboard.component';
import { BookDashboardComponent } from '../books/book-dashboard/book-dashboard.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { authGuard } from '../core/guards/auth.guard';
import { productResolver } from '../core/resolvers/product.resolver';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { CartComponent } from '../products/cart/cart.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'products',
        component: ProductDashboardComponent 
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent ,
        resolve: { productDetails: productResolver}

      },
      {
        path: 'cart',
        component: CartComponent 
      },
      {
        path: 'books',
        component: BookDashboardComponent 
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
