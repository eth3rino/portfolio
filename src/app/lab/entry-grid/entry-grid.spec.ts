import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGrid } from './entry-grid';

describe('EntryGrid', () => {
  let component: EntryGrid;
  let fixture: ComponentFixture<EntryGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
