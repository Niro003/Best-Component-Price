import { TestBed } from '@angular/core/testing';

import { GetComponentsByCategorieService } from './get-components-by-categorie.service';

describe('GetComponentsByCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetComponentsByCategorieService = TestBed.get(GetComponentsByCategorieService);
    expect(service).toBeTruthy();
  });
});
