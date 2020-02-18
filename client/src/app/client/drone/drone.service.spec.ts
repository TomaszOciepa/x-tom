import { TestBed } from '@angular/core/testing';

import { DroneService } from './drone.service';

describe('DroneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroneService = TestBed.get(DroneService);
    expect(service).toBeTruthy();
  });
});
