import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsShowcase } from './projects-showcase';

describe('ProjectsShowcase', () => {
  let component: ProjectsShowcase;
  let fixture: ComponentFixture<ProjectsShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
