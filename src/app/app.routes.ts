import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MyWork } from './my-work/my-work';
import { NotFound } from './not-found/not-found';
import { Lab } from './lab/lab';
import { EntryDetail } from './lab/entry-detail/entry-detail';
import { labEntryTitleResolver } from './resolvers/lab-entry-title.resolver';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home',},
    {path: 'home', component: Home, title: 'Home - Elian Meaca'},
    {path: 'work', component: MyWork, title: 'My Work - Elian Meaca'},
    {path: 'lab/:id', component: EntryDetail, title: labEntryTitleResolver},
    {path: 'lab', component: Lab, title: 'The Lab - Elian Meaca'},
    {path: '**', component: NotFound, title: 'Page Not Found - Elian Meaca'}
];
