import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mesh } from './mesh';

describe('Mesh', () => {
  let component: Mesh;
  let fixture: ComponentFixture<Mesh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mesh],
    }).compileComponents();

    fixture = TestBed.createComponent(Mesh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
