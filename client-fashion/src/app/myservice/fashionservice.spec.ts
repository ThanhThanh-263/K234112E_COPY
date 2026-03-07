import { TestBed } from '@angular/core/testing';

import { Fashionservice } from './fashionservice';

describe('Fashionservice', () => {
  let service: Fashionservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fashionservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
