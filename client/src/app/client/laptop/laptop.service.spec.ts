import { TestBed } from '@angular/core/testing';

import { LaptopService } from './laptop.service';

describe('LaptopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaptopService = TestBed.get(LaptopService);
    expect(service).toBeTruthy();
  });
});
