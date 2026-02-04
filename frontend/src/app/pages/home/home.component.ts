import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../components/particles/particles.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParticlesComponent, ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showContacts = false;
  tabsOpen = false;

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }

  toggleTabs() {
    this.tabsOpen = !this.tabsOpen;
  }
}
