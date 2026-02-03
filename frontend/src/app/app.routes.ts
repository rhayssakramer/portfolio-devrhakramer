import { Routes } from '@angular/router';
import { IndexComponent } from '../pages/index.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
