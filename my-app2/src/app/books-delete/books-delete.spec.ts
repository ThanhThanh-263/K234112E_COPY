import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDelete } from './books-delete';

describe('BooksDelete', () => {
  let component: BooksDelete;
  let fixture: ComponentFixture<BooksDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
