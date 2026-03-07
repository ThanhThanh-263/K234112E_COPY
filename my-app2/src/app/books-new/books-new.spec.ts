import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNew } from './books-new';

describe('BooksNew', () => {
  let component: BooksNew;
  let fixture: ComponentFixture<BooksNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
