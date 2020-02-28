import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopByIdComponent } from './laptop-by-id.component';

describe('LaptopByIdComponent', () => {
  let component: LaptopByIdComponent;
  let fixture: ComponentFixture<LaptopByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
