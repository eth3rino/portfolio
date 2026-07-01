import { TestBed } from '@angular/core/testing';

import { MetaTagHandler } from './meta-tag-handler';

describe('MetaTagHandler', () => {
  let service: MetaTagHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaTagHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
