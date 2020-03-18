import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopFormComponent } from './laptop-form.component';

describe('LaptopFormComponent', () => {
  let component: LaptopFormComponent;
  let fixture: ComponentFixture<LaptopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
