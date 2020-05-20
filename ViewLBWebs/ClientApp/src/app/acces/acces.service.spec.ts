import { TestBed } from '@angular/core/testing';

import { AccesService } from './acces.service';

describe('AccesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesService = TestBed.get(AccesService);
    expect(service).toBeTruthy();
  });
});
