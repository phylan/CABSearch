import { TestBed, inject } from '@angular/core/testing';

import { DecisionServiceService } from './decision-service.service';

describe('DecisionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecisionServiceService]
    });
  });

  it('should be created', inject([DecisionServiceService], (service: DecisionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
