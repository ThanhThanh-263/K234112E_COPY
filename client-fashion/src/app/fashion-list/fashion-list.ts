import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Fashion, Fashionservice } from '../myservice/fashionservice';

@Component({
  selector: 'app-fashion-list',
  standalone: false,
  templateUrl: './fashion-list.html',
  styleUrl: './fashion-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FashionList implements OnInit {
  fashions: Fashion[] = [];
  filteredFashions: Fashion[] = [];
  errorMessage = '';
  selectedStyle: string = '';
  
  // Available styles
  styles = ['CELEBRITY STYLE', 'TRENDS', 'STREET STYLE'];
  
  // Grouped fashions by style
  fashionsByStyle: { [key: string]: Fashion[] } = {};

  constructor(
    private fashionService: Fashionservice,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadFashions();
  }

  loadFashions(): void {
    this.fashionService.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        this.groupFashionsByStyle();
        this.applyFilter();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errorMessage = err.message || 'Lỗi khi tải dữ liệu';
        this.cdr.markForCheck();
      }
    });
  }

  groupFashionsByStyle(): void {
    this.fashionsByStyle = {};
    this.styles.forEach(style => {
      this.fashionsByStyle[style] = this.fashions.filter(f => f.style === style);
    });
  }

  applyFilter(): void {
    if (this.selectedStyle === '') {
      this.filteredFashions = this.fashions;
    } else {
      this.filteredFashions = this.fashions.filter(f => f.style === this.selectedStyle);
    }
    this.groupFashionsByStyle();
    this.cdr.markForCheck();
  }

  onStyleChange(): void {
    this.applyFilter();
  }

  viewDetail(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/fashion', id]);
    }
  }

  getThumbnailSrc(base64: string): string {
    return base64 || 'assets/placeholder.jpg';
  }
}
