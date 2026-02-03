import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../components/particles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
