import { Routes } from '@angular/router';
import {LandingPage} from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPage
  },
];
