import { Component, OnInit } from '@angular/core';
import { FakeProductService } from '../myservice/fake-product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product-component.html',
  styleUrls: ['./fake-product-component.css'],
  imports: [CommonModule]
})
export class FakeProductComponent implements OnInit {
  data: any;
  errMessage: string = '';
  
  constructor(private _service: FakeProductService) {}
  
  ngOnInit(): void {
    this._service.getFakeProductData().subscribe({
      next: (data) => { 
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err.message || err;
      }
    });
  }
}