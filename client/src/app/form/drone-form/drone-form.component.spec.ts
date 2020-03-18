import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneFormComponent } from './drone-form.component';

describe('DroneFormComponent', () => {
  let component: DroneFormComponent;
  let fixture: ComponentFixture<DroneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
