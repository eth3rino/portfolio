import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShowcase } from './work-showcase';

describe('WorkShowcase', () => {
  let component: WorkShowcase;
  let fixture: ComponentFixture<WorkShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
