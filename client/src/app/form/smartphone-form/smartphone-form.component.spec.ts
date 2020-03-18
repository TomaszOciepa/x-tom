import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneFormComponent } from './smartphone-form.component';

describe('SmartphoneFormComponent', () => {
  let component: SmartphoneFormComponent;
  let fixture: ComponentFixture<SmartphoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
