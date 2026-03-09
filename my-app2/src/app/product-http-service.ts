import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  // backend API base url
  private apiBase = 'http://localhost:3002';

  constructor(private _http: HttpClient) {}

  // products endpoints -------------------------------------------------
  get_all_products(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.apiBase}/products`);
  }

  // cart endpoints -----------------------------------------------------
  addToCart(product: Product): Observable<any> {
    return this._http.post(`${this.apiBase}/cart/add`, product, { withCredentials: true });
  }

  getCart(): Observable<{ cart: CartItem[] }> {
    return this._http.get<{ cart: CartItem[] }>(`${this.apiBase}/cart`, { withCredentials: true });
  }

  updateCart(items: { _id: string; quantity: number; remove?: boolean }[]) {
    return this._http.post(`${this.apiBase}/cart/update`, { items }, { withCredentials: true });
  }

  clearCart() {
    return this._http.delete(`${this.apiBase}/cart/clear`, { withCredentials: true });
  }
}

