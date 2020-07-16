import { TestBed } from '@angular/core/testing';

import { ApplianceService } from './appliance.service';

describe('ApplianceService', () => {
  let service: ApplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
