import { TestBed } from '@angular/core/testing';

import { ScrollRevealer } from './scroll-revealer';

describe('ScrollRevealer', () => {
  let service: ScrollRevealer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollRevealer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
