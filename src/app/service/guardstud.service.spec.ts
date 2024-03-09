import { TestBed } from '@angular/core/testing';

import { GuardstudService } from './guardstud.service';

describe('GuardstudService', () => {
  let service: GuardstudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardstudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
