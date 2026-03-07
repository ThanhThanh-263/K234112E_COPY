import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None, // ✅ tắt encapsulation — CSS hoạt động bình thường
})
export class App {
  protected readonly title = signal('admin-fashion');
}
