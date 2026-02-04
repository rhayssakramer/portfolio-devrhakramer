import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../components/particles/particles.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParticlesComponent, ProfileCardComponent, ResumeComponent, PortfolioComponent, BlogComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showContacts = false;
  tabsOpen = false;
  activeTab: 'about' | 'resume' | 'portfolio' | 'blog' | 'contact' = 'about';

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }

  toggleTabs() {
    this.tabsOpen = !this.tabsOpen;
  }

  setTab(tab: 'about' | 'resume' | 'portfolio' | 'blog' | 'contact') {
    this.activeTab = tab;
    this.tabsOpen = false;
  }
}
