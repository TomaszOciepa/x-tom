import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSpecialComponent } from './box-special.component';

describe('BoxSpecialComponent', () => {
  let component: BoxSpecialComponent;
  let fixture: ComponentFixture<BoxSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
