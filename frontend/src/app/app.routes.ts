import { Routes } from '@angular/router';
import { IndexComponent } from '../pages/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '**', redirectTo: '' }
];
