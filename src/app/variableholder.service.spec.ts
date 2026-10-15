import { TestBed } from '@angular/core/testing';

import { VariableholderService } from './variableholder.service';

describe('VariableholderService', () => {
  let service: VariableholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
