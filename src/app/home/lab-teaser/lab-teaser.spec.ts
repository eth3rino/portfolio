import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTeaser } from './lab-teaser';

describe('LabTeaser', () => {
  let component: LabTeaser;
  let fixture: ComponentFixture<LabTeaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTeaser],
    }).compileComponents();

    fixture = TestBed.createComponent(LabTeaser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
