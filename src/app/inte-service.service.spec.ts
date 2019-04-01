import { TestBed } from '@angular/core/testing';

import { InteServiceService } from './inte-service.service';

describe('InteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteServiceService = TestBed.get(InteServiceService);
    expect(service).toBeTruthy();
  });
});
