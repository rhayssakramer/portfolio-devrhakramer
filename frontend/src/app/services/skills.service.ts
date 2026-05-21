import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GitHubService } from './github.service';

export interface Skill {
  name: string;
  level: number; // 0-100
  sources: {
    github?: number;
    certifications?: number;
    courses?: number;
    experience?: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private githubService = inject(GitHubService);
  private http = inject(HttpClient);

  // Mapeamento de linguagens do GitHub para nomes de habilidades
  private languageMapping: { [key: string]: string[] } = {
    'TypeScript': ['TypeScript', 'Angular'],
    'JavaScript': ['JavaScript/Node.js', 'Node.js'],
    'Python': ['Python'],
    'Java': ['Java'],
    'C#': ['C#', '.NET'],
    'HTML': ['HTML'],
    'CSS': ['CSS'],
    'SQL': ['SQL Server'],
    'Shell': ['PowerShell'],
    'Docker': ['Docker/Kubernetes']
  };

  // Mapeamento de tópicos do GitHub para habilidades
  private topicMapping: { [key: string]: string } = {
    angular: 'Angular',
    react: 'React',
    vue: 'Vue',
    nodejs: 'Node.js',
    node: 'Node.js',
    express: 'Express',
    fastapi: 'FastAPI',
    django: 'Django',
    spring: 'Spring',
    docker: 'Docker/Kubernetes',
    kubernetes: 'Docker/Kubernetes',
    'rest-api': 'REST API',
    graphql: 'GraphQL'
  };

  calculateSkillsFromGitHub(): Observable<Skill[]> {
    return this.githubService.getRepositories().pipe(
      map(repos => this._calculateSkillsFromRepos(repos)),
      catchError(error => {
        console.error('Erro ao calcular skills do GitHub:', error);
        return of([]);
      })
    );
  }

  /**
   * Calcula scores de habilidades baseado em repositórios do GitHub
   * Leva em conta: linguagens usadas, frequência, recency, stars, forks
   */
  private _calculateSkillsFromRepos(repos: any[]): Skill[] {
    const skillScores: { [key: string]: { score: number; count: number; recent: number } } = {};

    repos.forEach(repo => {
      // Linguagem principal
      if (repo.language) {
        const skills = this.languageMapping[repo.language] || [repo.language];
        skills.forEach(skill => {
          if (!skillScores[skill]) {
            skillScores[skill] = { score: 0, count: 0, recent: 0 };
          }
          skillScores[skill].count++;
        });
      }

      // Tópicos (tags)
      if (repo.topics && Array.isArray(repo.topics)) {
        repo.topics.forEach((topic: string) => {
          const skill = this.topicMapping[topic.toLowerCase()];
          if (skill) {
            if (!skillScores[skill]) {
              skillScores[skill] = { score: 0, count: 0, recent: 0 };
            }
            skillScores[skill].count += 0.5; // Pesa menos que linguagem
          }
        });
      }

      // Bônus por recency (atualização recente)
      const updatedDate = new Date(repo.updated_at).getTime();
      const now = new Date().getTime();
      const daysAgo = (now - updatedDate) / (1000 * 60 * 60 * 24);

      if (repo.language) {
        const skills = this.languageMapping[repo.language] || [repo.language];
        skills.forEach(skill => {
          // Bônus se atualizado nos últimos 6 meses
          if (daysAgo < 180) {
            skillScores[skill].recent += 0.5;
          }
        });
      }

      // Bônus por stars (relevância/popularidade)
      if (repo.stargazers_count > 0) {
        const starBonus = Math.min(repo.stargazers_count / 5, 5); // Cap at 5
        if (repo.language) {
          const skills = this.languageMapping[repo.language] || [repo.language];
          skills.forEach(skill => {
            skillScores[skill].score += starBonus;
          });
        }
      }
    });

    // Converter para array e calcular scores finais (0-100)
    const skills: Skill[] = Object.entries(skillScores)
      .map(([name, data]) => {
        // Score = frequência de uso (count) + recency + stars
        // Normalizado para escala 0-100
        const baseScore = Math.min((data.count + data.recent) * 10, 100);
        const finalScore = Math.max(60, Math.min(100, baseScore)); // Min 60, Max 100

        return {
          name,
          level: Math.round(finalScore),
          sources: {
            github: Math.round(finalScore)
          }
        };
      })
      .sort((a, b) => b.level - a.level);

    return skills;
  }

  /**
   * Combina scores do GitHub com dados de certificações e experiências
   * Você pode expandir isso para incluir dados de currículo estruturados
   */
  calculateCombinedSkills(
    githubSkills: Skill[],
    certifications: { title: string; year: string; institution?: string }[] = [],
    experiences: { company: string; skills: string[] }[] = []
  ): Skill[] {
    const combined = new Map(githubSkills.map(s => [s.name, { ...s, sources: { ...s.sources, certifications: 0 } }]));

    // Bônus por certificações
    certifications.forEach(cert => {
      const year = parseInt(cert.year);
      const age = new Date().getFullYear() - year;
      // Certificações recentes (< 2 anos) recebem bônus de +10
      // Mais antigas recebem bônus menor
      const bonus = Math.max(0, 10 - age * 3);
      const title = cert.title.toLowerCase();

      // Mapear certificações para skills (expandido)
      const certMappings = [
        { keywords: ['azure', 'aws', 'cloud'], skill: 'Cloud' },
        { keywords: ['github'], skill: 'Git/GitHub' },
        { keywords: ['kubernetes', 'docker', 'container'], skill: 'Docker/Kubernetes' },
        { keywords: ['cybersecurity', 'security'], skill: 'Security' },
        { keywords: ['rest', 'api'], skill: 'REST API' },
        { keywords: ['graphql'], skill: 'GraphQL' },
        { keywords: ['database', 'sql', 'mongodb', 'nosql'], skill: 'Databases' },
        { keywords: ['typescript', 'node', 'javascript'], skill: 'JavaScript/Node.js' },
        { keywords: ['angular'], skill: 'Angular' },
        { keywords: ['react'], skill: 'React' },
        { keywords: ['python', 'django', 'fastapi'], skill: 'Python' },
        { keywords: ['java', 'spring'], skill: 'Java' },
        { keywords: ['csharp', 'c#', '.net'], skill: 'C#' },
        { keywords: ['ai', 'machine learning', 'ml'], skill: 'AI/ML' },
        { keywords: ['microservices'], skill: 'Microservices' },
        { keywords: ['devops'], skill: 'DevOps' }
      ];

      certMappings.forEach(mapping => {
        if (mapping.keywords.some(keyword => title.includes(keyword))) {
          this._updateSkill(combined, mapping.skill, bonus);
        }
      });
    });

    // Bônus por experiências
    experiences.forEach(exp => {
      exp.skills.forEach(skill => {
        this._updateSkill(combined, skill, 5);
      });
    });

    return Array.from(combined.values()).sort((a, b) => b.level - a.level);
  }

  private _updateSkill(skillMap: Map<string, Skill>, skillName: string, bonus: number) {
    if (skillMap.has(skillName)) {
      const skill = skillMap.get(skillName)!;
      skill.level = Math.min(100, skill.level + bonus);
      skill.sources.certifications = (skill.sources.certifications || 0) + bonus;
    } else {
      skillMap.set(skillName, {
        name: skillName,
        level: Math.min(100, 70 + bonus),
        sources: { certifications: bonus }
      });
    }
  }
}
