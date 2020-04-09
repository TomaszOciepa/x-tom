import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMobileComponent } from './box-mobile.component';

describe('BoxMobileComponent', () => {
  let component: BoxMobileComponent;
  let fixture: ComponentFixture<BoxMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
