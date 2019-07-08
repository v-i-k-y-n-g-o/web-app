import { TestBed } from '@angular/core/testing';

import { EntityActionsService } from './entity-actions.service';

describe('EntityActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityActionsService = TestBed.get(EntityActionsService);
    expect(service).toBeTruthy();
  });
});
