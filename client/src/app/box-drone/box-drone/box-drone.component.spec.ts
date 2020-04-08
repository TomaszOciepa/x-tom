import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDroneComponent } from './box-drone.component';

describe('BoxDroneComponent', () => {
  let component: BoxDroneComponent;
  let fixture: ComponentFixture<BoxDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
