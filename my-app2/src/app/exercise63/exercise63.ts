import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductHttpService, Product } from '../product-http-service';

@Component({
  selector: 'app-exercise63',
  standalone: false,
  templateUrl: './exercise63.html',
  styleUrl: './exercise63.css',
})
export class Exercise63 implements OnInit {
  products: Product[] = [];
  message = '';

  constructor(private api: ProductHttpService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.api.get_all_products().subscribe({
      next: data => {
        this.products = data;
        this.cdr.detectChanges();
      },
      error: err => {
        this.message = 'Failed to load products';
        this.cdr.detectChanges();
      },
    });
  }

  addToCart(p: Product) {
    this.api.addToCart(p).subscribe({
      next: res => {
        this.message = 'Item added to cart';
        this.cdr.detectChanges();
      },
      error: err => {
        this.message = 'Unable to add to cart';
        this.cdr.detectChanges();
      },
    });
  }
}