import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDroneComponent } from './delete-drone.component';

describe('DeleteDroneComponent', () => {
  let component: DeleteDroneComponent;
  let fixture: ComponentFixture<DeleteDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
