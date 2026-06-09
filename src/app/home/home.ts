import { Component } from '@angular/core';
import { Mesh } from './mesh/mesh';
import { RouterModule } from '@angular/router';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';
import { ProjectsShowcase } from './projects-showcase/projects-showcase';
import { LabTeaser } from './lab-teaser/lab-teaser';

@Component({
  selector: 'app-home',
  imports: [Mesh, RouterModule, Hero, AboutMe, Contact, ProjectsShowcase, LabTeaser],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
