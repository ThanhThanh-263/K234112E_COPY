import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  product_url='assets/images/dataset/products.json';
  constructor(private _http:HttpClient) {}
  get_all_products():Observable<any>
  {
    return this._http.get<any>(this.product_url);
}
}
