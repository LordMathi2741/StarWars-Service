import { TestBed } from '@angular/core/testing';

import { ApiFakeService } from './api-fake.service';

describe('ApiFakeService', () => {
  let service: ApiFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
