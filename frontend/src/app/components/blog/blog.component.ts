import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToService, DevToArticle } from '../../services/devto.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: DevToArticle[] = [];
  loading = true;
  error = '';

  constructor(private devToService: DevToService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.devToService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar artigos:', err);
        this.error = 'Não foi possível carregar os artigos.';
        this.loading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  openArticle(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  title() {
    return 'Blog';
  }

  subtitle() {
    return 'Últimos artigos e tutoriais';
  }

  loadingText() {
    return 'Carregando artigos...';
  }

  readingTimeText() {
    return 'min de leitura';
  }

  noArticlesText() {
    return 'Nenhum artigo encontrado.';
  }
}
