import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddressFormComponent } from './order-address-form.component';

describe('OrderAddressFormComponent', () => {
  let component: OrderAddressFormComponent;
  let fixture: ComponentFixture<OrderAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAddressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
