import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDeleteComponent } from './orders-delete.component';

describe('OrdersDeleteComponent', () => {
  let component: OrdersDeleteComponent;
  let fixture: ComponentFixture<OrdersDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
