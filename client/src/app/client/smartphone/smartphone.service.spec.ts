import { TestBed } from '@angular/core/testing';

import { SmartphoneService } from './smartphone.service';

describe('SmartphoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartphoneService = TestBed.get(SmartphoneService);
    expect(service).toBeTruthy();
  });
});
