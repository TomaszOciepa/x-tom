import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsComponent } from './laptops.component';

describe('LaptopComponent', () => {
  let component: LaptopsComponent;
  let fixture: ComponentFixture<LaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
