import { Component } from '@angular/core';
import { BookAPIService } from '../myservice/book-api.service';
import { Book } from '../classes/ibook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-update',
  standalone: false,
  templateUrl: './books-update.html',
  styleUrl: './books-update.css',
})
export class BooksUpdate {
  book = new Book();
  books: any
  errMessage: string = ''
  constructor(private _service: BookAPIService, private router: Router, private activeRouter: ActivatedRoute) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
    activeRouter.paramMap.subscribe((params) => {
      let bookId = params.get("id")
      if (bookId != null)
        this.searchBook(bookId)
    })
  }
  putBook() {
    const existing = this.books.find((b: { BookId: any; }) => b.BookId === this.book.BookId);
    if (existing) {
      this.book.Image = existing.Image; // giữ ảnh cũ
    }
    this._service.putBook(this.book).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  searchBook(bookId: string) {
    this._service.getBook(bookId).subscribe({
      next: (data) => { this.book = data },
      error: (err) => { this.errMessage = err }
    })
  }

}
