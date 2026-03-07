import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mygpa } from './mygpa';

describe('Mygpa', () => {
  let component: Mygpa;
  let fixture: ComponentFixture<Mygpa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mygpa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mygpa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
