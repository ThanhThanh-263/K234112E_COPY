import { Component, signal } from '@angular/core';
import { AuthService } from './myservice/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app2');
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
