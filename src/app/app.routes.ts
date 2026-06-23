import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MyWork } from './my-work/my-work';
import { NotFound } from './not-found/not-found';
import { Lab } from './lab/lab';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'work', component: MyWork},
    {path: 'lab', component: Lab},
    {path: '**', component: NotFound}
];
