import { TestBed } from '@angular/core/testing';

import { AcumuladorService } from './acumulador.service';

describe('AcumuladorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcumuladorService = TestBed.get(AcumuladorService);
    expect(service).toBeTruthy();
  });
});
