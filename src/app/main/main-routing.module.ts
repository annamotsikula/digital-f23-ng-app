import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductDashboardComponent } from '../products/dashboard/dashboard.component';
import { BookDashboardComponent } from '../books/book-dashboard/book-dashboard.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
        component: ProductDetailsComponent 

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
