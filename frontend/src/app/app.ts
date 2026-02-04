import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticlesComponent } from './components/particles.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticlesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}
