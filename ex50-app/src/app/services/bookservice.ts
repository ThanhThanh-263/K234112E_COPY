import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
