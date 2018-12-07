import { TestBed } from '@angular/core/testing';

import { ComponentSuggestionService } from './component-suggestion.service';

describe('ComponentSuggestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentSuggestionService = TestBed.get(ComponentSuggestionService);
    expect(service).toBeTruthy();
  });
});
