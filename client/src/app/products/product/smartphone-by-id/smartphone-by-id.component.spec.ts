import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneByIdComponent } from './smartphone-by-id.component';

describe('SmartphoneByIdComponent', () => {
  let component: SmartphoneByIdComponent;
  let fixture: ComponentFixture<SmartphoneByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
