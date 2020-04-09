import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLastProductComponent } from './box-last-product.component';

describe('BoxLastProductComponent', () => {
  let component: BoxLastProductComponent;
  let fixture: ComponentFixture<BoxLastProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxLastProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLastProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
