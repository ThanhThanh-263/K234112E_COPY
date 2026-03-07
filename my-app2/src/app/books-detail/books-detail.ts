import { Component } from '@angular/core';
import { BookAPIService } from '../myservice/book-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-detail',
  standalone: false,
  templateUrl: './books-detail.html',
  styleUrl: './books-detail.css',
})
export class BooksDetail {
  book: any;
  errMessage: string = ''
  constructor(private _service: BookAPIService, private router: Router, private activeRouter: ActivatedRoute) {
    activeRouter.paramMap.subscribe((params) => {
      let bookId = params.get("id")
      if (bookId != null)
        this.searchBook(bookId)
    })
  }
  searchBook(bookId: string) {
    this._service.getBook(bookId).subscribe({
      next: (data) => { this.book = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
