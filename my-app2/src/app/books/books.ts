import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAPIService } from '../myservice/book-api.service';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {
  books: any;
  errMessage: string = '';

  constructor(
    private _service: BookAPIService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private cdr: ChangeDetectorRef  // ✅ thêm vào
  ) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.cdr.detectChanges(); // ✅ ép Angular render ngay
      },
      error: (err) => { this.errMessage = err; }
    });
  }

  show_detail(id: any) {
    this.router.navigate(['ex41', id]);
  }
  show_update(id: any) {
    this.router.navigate(['ex45', id]);
  }
  request_delete(id: any) {
    if (confirm("Bạn có chắc muốn xóa sách BookId=[" + id + "]?")) {
      this.deleteBook(id);
    }
  }
  deleteBook(bookId: any) {
    this._service.deleteBook(bookId).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }

}