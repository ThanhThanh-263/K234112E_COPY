import { Component } from '@angular/core';
import { BookAPIService } from '../myservice/book-api.service';

@Component({
  selector: 'app-books-delete',
  standalone: false,
  templateUrl: './books-delete.html',
  styleUrl: './books-delete.css',
})
export class BooksDelete {
  books: any
  errMessage: string = ''
  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  deleteBook(bookId: any) {
    this._service.deleteBook(bookId).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }

}
