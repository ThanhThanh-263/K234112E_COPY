import { Component } from '@angular/core';
import { BookAPIService } from '../myservice/book-api.service';
import { Book } from '../classes/ibook';

@Component({
  selector: 'app-books-new',
  standalone: false,
  templateUrl: './books-new.html',
  styleUrl: './books-new.css',
})
export class BooksNew {
  book = new Book();
  books: any;
  errMessage: string = '';
  alertMessage: string = ''; // ✅ thay thế alert()

  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data; },
      error: (err) => { this.errMessage = err; }
    });
  }

  postBook() {
    this.alertMessage = 'Book name = ' + this.book.BookName; // ✅ hiện toast
    this._service.postBook(this.book).subscribe({
      next: (data) => { this.books = data; },
      error: (err) => { this.errMessage = err; }
    });
  }
}