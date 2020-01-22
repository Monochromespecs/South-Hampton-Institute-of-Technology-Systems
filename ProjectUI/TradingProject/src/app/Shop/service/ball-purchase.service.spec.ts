import { TestBed } from '@angular/core/testing';

import { BallPurchaseService } from './ball-purchase.service';

describe('BallPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallPurchaseService = TestBed.get(BallPurchaseService);
    expect(service).toBeTruthy();
  });
});
