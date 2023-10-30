import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule, TruncatePipe]
})
export class ProductCardComponent {
 @Input() product!: Product;
 @Output() productClicked: EventEmitter<'DELETE' | 'VISIT'> = new EventEmitter();
 formControlName: FormControl = new FormControl('');
 @Output() newValue: EventEmitter<string> = new EventEmitter<string>()
  
 constructor() {
  this.formControlName.valueChanges.pipe(
    debounceTime(500),
    tap(val => console.log(val)),
    // tap(data => this.product.description = data)
  ).subscribe()
 }

 submit() {
  if(this.formControlName.value !== "") {
    this.newValue.emit(this.formControlName.value);
  }
 }
}
