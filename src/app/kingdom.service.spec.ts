import { TestBed } from '@angular/core/testing';

import { KingdomService } from './kingdom.service';

describe('KingdomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KingdomService = TestBed.get(KingdomService);
    expect(service).toBeTruthy();
  });
});
