import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeGuard } from './welcome.guard';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, canActivate: [WelcomeGuard] },
  { path: '**', redirectTo: '' }
];
