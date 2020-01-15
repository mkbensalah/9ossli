import { TestBed } from '@angular/core/testing';

import { AuthentificatServiceService } from './authentificat-service.service';

describe('AuthentificatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificatServiceService = TestBed.get(AuthentificatServiceService);
    expect(service).toBeTruthy();
  });
});
