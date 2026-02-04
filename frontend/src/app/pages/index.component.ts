import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ParticlesComponent } from '../components/particles.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [CommonModule, ParticlesComponent]
})
export class IndexComponent {
  constructor(private router: Router) {}

  goHome(): void {
    localStorage.setItem('allowHome', 'true');
    this.router.navigate(['/home']);
  }
}
