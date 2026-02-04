import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  expandedCards: { [key: string]: boolean } = {
    education: false,
    experience: false,
    certifications: false,
    certificates: false
  };

  // Quantidade de itens em cada card
  cardItemsCount: { [key: string]: number } = {
    education: 1,
    experience: 3,
    certifications: 3,
    certificates: 9
  };

  toggleCard(cardName: string) {
    this.expandedCards[cardName] = !this.expandedCards[cardName];
  }

  isExpanded(cardName: string): boolean {
    return this.expandedCards[cardName];
  }

  hasMultipleItems(cardName: string): boolean {
    return this.cardItemsCount[cardName] > 1;
  }
}
