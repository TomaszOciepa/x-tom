import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesComponent } from './drones.component';

describe('DroneComponent', () => {
  let component: DronesComponent;
  let fixture: ComponentFixture<DronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
