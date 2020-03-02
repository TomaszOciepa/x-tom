import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLaptopComponent } from './edit-laptop.component';

describe('EditLaptopComponent', () => {
  let component: EditLaptopComponent;
  let fixture: ComponentFixture<EditLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
