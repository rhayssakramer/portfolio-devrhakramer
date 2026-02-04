import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ParticlesComponent } from '../../components/particles/particles.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router) {}

  goHome(): void {
    localStorage.setItem('allowHome', 'true');
    this.router.navigate(['/home']);
  }
}