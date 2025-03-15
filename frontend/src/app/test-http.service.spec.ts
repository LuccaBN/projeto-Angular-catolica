import { TestBed } from '@angular/core/testing';

import { TestHttpService } from './test-http.service';

describe('TestHttpService', () => {
  let service: TestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
