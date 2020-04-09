import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFooterComponent } from './box-footer.component';

describe('BoxFooterComponent', () => {
  let component: BoxFooterComponent;
  let fixture: ComponentFixture<BoxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
