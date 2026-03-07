import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Bookservice } from '../services/bookservice';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: Bookservice) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number) {
    if (confirm('Delete this book?')) {
      this.bookService.delete(id).subscribe(() => {
        this.loadBooks();
      });
    }
  }
}
