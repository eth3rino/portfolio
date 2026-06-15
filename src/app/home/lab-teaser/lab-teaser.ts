import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-lab-teaser',
  imports: [RouterLink, LucideArrowRight],
  templateUrl: './lab-teaser.html',
  styleUrl: './lab-teaser.scss',
})
export class LabTeaser {
}
