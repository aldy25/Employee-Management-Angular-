import { TestBed } from '@angular/core/testing';

import { DetailEmployeeService } from './detail-employee.service';

describe('DetailEmployeeService', () => {
  let service: DetailEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
