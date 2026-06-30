import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideArrowLeft } from '@lucide/angular';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-entry-detail',
  imports: [MarkdownComponent, LucideArrowLeft, RouterLink],
  templateUrl: './entry-detail.html',
  styleUrl: './entry-detail.scss',
})
export class EntryDetail implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {}
  
  src: WritableSignal<string> = signal('')
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.src.set(`lab/${id}/${id}.md`)
  }
}
