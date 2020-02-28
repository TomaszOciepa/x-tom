import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneByIdComponent } from './drone-by-id.component';

describe('DroneByIdComponent', () => {
  let component: DroneByIdComponent;
  let fixture: ComponentFixture<DroneByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
