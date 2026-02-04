import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class WelcomeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const allowed = localStorage.getItem('allowHome') === 'true';
    if (allowed) {
      localStorage.removeItem('allowHome');
      return true;
    }
    return this.router.createUrlTree(['']);
  }
}
