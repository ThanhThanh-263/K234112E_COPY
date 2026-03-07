import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookmanagementcomponent } from './bookmanagementcomponent';

describe('Bookmanagementcomponent', () => {
  let component: Bookmanagementcomponent;
  let fixture: ComponentFixture<Bookmanagementcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookmanagementcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookmanagementcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
