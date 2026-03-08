import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../myservice/auth-service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';
  confirmPassword = '';
  error = '';
  success = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.error = '';
    this.success = '';

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true;
    this.authService.register(this.username.trim(), this.password.trim()).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = 'Account created! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Registration failed';
      }
    });
  }
}