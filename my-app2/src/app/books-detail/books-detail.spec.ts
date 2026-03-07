import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetail } from './books-detail';

describe('BooksDetail', () => {
  let component: BooksDetail;
  let fixture: ComponentFixture<BooksDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
