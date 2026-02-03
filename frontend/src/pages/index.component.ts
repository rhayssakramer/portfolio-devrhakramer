import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ParticlesComponent } from '../app/components/particles.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticlesComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor() {}
}