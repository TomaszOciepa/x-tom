import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationOrderAddressComponent } from './validation-order-address.component';

describe('ValidationOrderAddressComponent', () => {
  let component: ValidationOrderAddressComponent;
  let fixture: ComponentFixture<ValidationOrderAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationOrderAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationOrderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
