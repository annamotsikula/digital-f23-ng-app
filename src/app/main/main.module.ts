import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { Child1Component } from '../home/child/child.component';
import { Child2Component } from '../home/child2/child2.component';
import { BookCardComponent } from '../books/book-card/book-card.component';
import { TruncatePipe } from '../core/pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { BookDashboardComponent } from '../books/book-dashboard/book-dashboard.component';
import { ProductDashboardComponent } from '../products/dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    TruncatePipe,
    Child1Component,
    Child2Component,
    BookCardComponent,
    BookDashboardComponent,
    ProductCardComponent,
    ProductDashboardComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [HeaderComponent]
})
export class MainModule { }
