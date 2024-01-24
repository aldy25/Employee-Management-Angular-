import { TestBed } from '@angular/core/testing';

import { IndexEmployeeService } from './index-employee.service';

describe('IndexEmployeeService', () => {
  let service: IndexEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
