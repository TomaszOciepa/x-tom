import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSmartphoneComponent } from './delete-smartphone.component';

describe('DeleteSmartphoneComponent', () => {
  let component: DeleteSmartphoneComponent;
  let fixture: ComponentFixture<DeleteSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
