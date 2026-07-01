import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MyWork } from './my-work/my-work';
import { NotFound } from './not-found/not-found';
import { Lab } from './lab/lab';
import { EntryDetail } from './lab/entry-detail/entry-detail';
import { labEntryTitleResolver } from './resolvers/lab-entry-route.resolver';
import { labEntryDescriptionResolver } from './resolvers/lab-entry-route.resolver';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home, title: 'Home - Elian Meaca', data: { description: 'Fullstack developer based in Buenos Aires, Argentina. I build clean, well-crafted web applications using Angular, NestJS, and PostgreSQL.' }},
    {path: 'work', component: MyWork, title: 'My Work - Elian Meaca', data: { description: 'A selection of projects I\'ve built — from production-ready REST APIs to realtime dashboards. Fullstack work with Angular, NestJS, and PostgreSQL.' }},
    {path: 'lab/:id', component: EntryDetail, title: labEntryTitleResolver, resolve: { description: labEntryDescriptionResolver }},
    {path: 'lab', component: Lab, title: 'The Lab - Elian Meaca', data: { description: 'Experiments, side projects, and things built for fun — design systems, hardware builds, NixOS configs, and more.' }},
    {path: '**', component: NotFound, title: 'Page Not Found - Elian Meaca'}
];
