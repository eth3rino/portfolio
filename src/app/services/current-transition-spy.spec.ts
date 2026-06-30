import { TestBed } from '@angular/core/testing';

import { CurrentTransitionSpy } from './current-transition-spy';

describe('CurrentTransitionSpy', () => {
  let service: CurrentTransitionSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTransitionSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
