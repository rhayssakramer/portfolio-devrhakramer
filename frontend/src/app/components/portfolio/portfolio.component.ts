import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService, GitHubRepo } from '../../services/github.service';

interface ProjectWithTags extends GitHubRepo {
  tags: string[];
  mainTag: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: ProjectWithTags[] = [];
  filteredProjects: ProjectWithTags[] = [];
  loading = true;
  error = '';
  selectedFilter = '';
  selectedCategory = 'all';

  categoryFiltersData = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Banco de Dados' },
    { id: 'tools', label: 'Ferramentas' }
  ];

  // Categorias e tecnologias
  categories = {
    frontend: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Angular', 'React', 'Vue', 'Sass', 'Tailwind'],
    backend: ['JavaScript', 'Node.js', 'npm', 'TypeScript', 'C#', '.NET', 'Java', 'Spring', 'Python', 'Django', 'FastAPI', 'Express'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Firebase'],
    tools: ['Git', 'GitHub', 'GitLab', 'Markdown', 'Azure', 'Docker', 'Kubernetes', 'VS Code', 'Swagger', 'Figma', 'Prisma', 'Nest.js']
  };

  // Mapeamento de linguagens e topics para tags
  private techMapping: { [key: string]: string[] } = {
    'JavaScript': ['JavaScript', 'Node.js'],
    'TypeScript': ['TypeScript', 'Node.js'],
    'Python': ['Python'],
    'Java': ['Java'],
    'C#': ['C#', '.NET'],
    'HTML': ['HTML', 'CSS'],
    'CSS': ['CSS'],
    'Vue': ['Vue', 'JavaScript'],
    'Shell': [],
    'Dockerfile': ['Docker'],
    
    // Topics para tags
    'react': ['React', 'JavaScript'],
    'angular': ['Angular', 'TypeScript'],
    'vue': ['Vue', 'JavaScript'],
    'nodejs': ['Node.js', 'JavaScript'],
    'node': ['Node.js', 'JavaScript'],
    'express': ['Express', 'Node.js'],
    'fastapi': ['FastAPI', 'Python'],
    'django': ['Django', 'Python'],
    'spring': ['Spring', 'Java'],
    'springboot': ['Spring', 'Java'],
    'mongodb': ['MongoDB'],
    'postgresql': ['PostgreSQL'],
    'mysql': ['MySQL'],
    'sqlite': ['SQLite'],
    'redis': ['Redis'],
    'docker': ['Docker'],
    'kubernetes': ['Kubernetes'],
    'azure': ['Azure'],
    'tailwind': ['Tailwind', 'CSS'],
    'tailwindcss': ['Tailwind', 'CSS'],
    'bootstrap': ['Bootstrap', 'CSS'],
    'sass': ['Sass', 'CSS'],
    'scss': ['Sass', 'CSS'],
    'jquery': ['jQuery', 'JavaScript'],
    'typescript': ['TypeScript'],
    'javascript': ['JavaScript'],
    'python': ['Python'],
    'java': ['Java'],
    'csharp': ['C#', '.NET'],
    'dotnet': ['.NET', 'C#'],
    'html': ['HTML'],
    'css': ['CSS'],
    'prisma': ['Prisma'],
    'nestjs': ['Nest.js', 'TypeScript'],
    'firebase': ['Firebase'],
    'git': ['Git'],
    'github': ['GitHub'],
    'gitlab': ['GitLab'],
    'markdown': ['Markdown'],
    'swagger': ['Swagger'],
    'npm': ['npm'],
  };

  constructor(private githubService: GitHubService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.githubService.getRepositories().subscribe({
      next: (data) => {
        this.projects = data
          .filter(repo => !repo.name.includes('rhayssakramer'))
          .map(repo => this.enrichProjectWithTags(repo));
        this.filteredProjects = this.projects;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
        this.error = 'Não foi possível carregar os projetos.';
        this.loading = false;
      }
    });
  }

  private enrichProjectWithTags(repo: GitHubRepo): ProjectWithTags {
    const tags = new Set<string>();
    
    // Adiciona tags baseadas na linguagem principal
    if (repo.language && this.techMapping[repo.language]) {
      this.techMapping[repo.language].forEach(tag => tags.add(tag));
    }
    
    // Adiciona tags baseadas nos topics
    if (repo.topics) {
      repo.topics.forEach(topic => {
        const topicLower = topic.toLowerCase();
        if (this.techMapping[topicLower]) {
          this.techMapping[topicLower].forEach(tag => tags.add(tag));
        }
      });
    }

    // Determina a tag principal (linguagem predominante)
    const mainTag = repo.language || 'Outros';
    
    // Determina a categoria principal
    const category = this.determineCategory([...tags]);

    return {
      ...repo,
      tags: [...tags],
      mainTag,
      category
    };
  }

  private determineCategory(tags: string[]): string {
    if (tags.some(tag => this.categories.frontend.includes(tag))) return 'frontend';
    if (tags.some(tag => this.categories.backend.includes(tag))) return 'backend';
    if (tags.some(tag => this.categories.database.includes(tag))) return 'database';
    if (tags.some(tag => this.categories.tools.includes(tag))) return 'tools';
    return 'outros';
  }

  filterByTechnology(tech: string): void {
    this.selectedFilter = tech;
    this.selectedCategory = '';
    
    if (tech === 'Todos') {
      this.filteredProjects = this.projects;
      this.selectedFilter = '';
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.includes(tech) || 
        project.mainTag === tech ||
        project.language === tech
      );
    }
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedFilter = '';
    
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category === category
      );
    }
  }

  getAllTechnologies(): string[] {
    return Object.values(this.categories).flat();
  }

  getAvailableTechnologies(): string[] {
    const availableTechs = new Set<string>();
    this.projects.forEach(project => {
      project.tags.forEach(tag => availableTechs.add(tag));
      if (project.mainTag) availableTechs.add(project.mainTag);
    });
    return Object.values(this.categories).flat().filter(tech => availableTechs.has(tech));
  }

  getProjectImage(repo: GitHubRepo): string {
    return `https://opengraph.githubassets.com/1/${repo.full_name}`;
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C#': '#178600',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Vue': '#41b883',
      'Shell': '#89e051',
      'Go': '#00ADD8',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Rust': '#dea584',
    };
    return colors[language] || '#6e7681';
  }

  pageTitle() {
    return 'Portfólio';
  }

  pageSubtitle() {
    return 'Meus projetos no GitHub';
  }

  categoryFilters() {
    return this.categoryFiltersData;
  }

  loadingText() {
    return 'Carregando projetos...';
  }

  defaultDescription() {
    return 'Sem descrição disponível';
  }
}
