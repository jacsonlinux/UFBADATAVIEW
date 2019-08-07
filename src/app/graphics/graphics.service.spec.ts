import { TestBed } from '@angular/core/testing';

import { GraphicsService } from './graphics.service';

describe('GraphicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphicsService = TestBed.get(GraphicsService);
    expect(service).toBeTruthy();
  });
});
