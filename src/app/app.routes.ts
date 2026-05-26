import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'projects', component: Projects},
    {path: '**', component: NotFound}
];
