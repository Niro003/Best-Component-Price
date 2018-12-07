import { TestBed } from '@angular/core/testing';

import { ComponentStatisticsService } from './component-statistics.service';

describe('ComponentStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentStatisticsService = TestBed.get(ComponentStatisticsService);
    expect(service).toBeTruthy();
  });
});
