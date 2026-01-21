import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../app/components/particles.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor() {}
}