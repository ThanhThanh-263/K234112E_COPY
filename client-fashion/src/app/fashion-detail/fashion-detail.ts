import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion, Fashionservice } from '../myservice/fashionservice';

@Component({
  selector: 'app-fashion-detail',
  standalone: false,
  templateUrl: './fashion-detail.html',
  styleUrl: './fashion-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FashionDetail implements OnInit {
  fashion: Fashion | null = null;
  errorMessage = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fashionService: Fashionservice,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadFashion(id);
    }
  }

  loadFashion(id: string): void {
    this.loading = true;
    this.fashionService.getFashion(id).subscribe({
      next: (data) => {
        this.fashion = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errorMessage = err.message || 'Lỗi khi tải dữ liệu';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getThumbnailSrc(): string {
    return this.fashion?.thumbnail || 'assets/placeholder.jpg';
  }
}
