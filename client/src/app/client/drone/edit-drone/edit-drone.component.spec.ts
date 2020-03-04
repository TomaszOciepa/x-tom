import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDroneComponent } from './edit-drone.component';

describe('EditDroneComponent', () => {
  let component: EditDroneComponent;
  let fixture: ComponentFixture<EditDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
