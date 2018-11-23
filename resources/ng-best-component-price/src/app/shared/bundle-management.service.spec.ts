import { TestBed } from '@angular/core/testing';

import { BundleManagementService } from './bundle-management.service';

describe('BundleManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BundleManagementService = TestBed.get(BundleManagementService);
    expect(service).toBeTruthy();
  });
});
