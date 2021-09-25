import { TestBed } from '@angular/core/testing';

import { SpringsecurityService } from './springsecurity.service';

describe('SpringsecurityService', () => {
  let service: SpringsecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringsecurityService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
