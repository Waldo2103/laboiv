import { TestBed } from '@angular/core/testing';

import { PptService } from './ppt.service';

describe('PptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PptService = TestBed.get(PptService);
    expect(service).toBeTruthy();
  });
});
