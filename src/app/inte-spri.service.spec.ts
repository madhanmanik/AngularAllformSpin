import { TestBed } from '@angular/core/testing';

import { InteSpriService } from './inte-spri.service';

describe('InteSpriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteSpriService = TestBed.get(InteSpriService);
    expect(service).toBeTruthy();
  });
});
