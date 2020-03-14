import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartphoneComponent } from './add-smartphone.component';

describe('AddSmartphoneComponent', () => {
  let component: AddSmartphoneComponent;
  let fixture: ComponentFixture<AddSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
