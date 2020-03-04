import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmartphoneComponent } from './edit-smartphone.component';

describe('EditSmartphoneComponent', () => {
  let component: EditSmartphoneComponent;
  let fixture: ComponentFixture<EditSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
