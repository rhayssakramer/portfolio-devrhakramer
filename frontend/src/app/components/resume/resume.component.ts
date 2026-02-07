import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CardConfigSvg = {
  id: string;
  title: string;
  animationDelay: string;
  iconType: 'svg';
  svgPaths: string[];
  svgRect?: { x: string; y: string; width: string; height: string; rx: string; ry: string };
  svgCircle?: { cx: string; cy: string; r: string };
  iconSrc?: never;
};

type CardConfigImage = {
  id: string;
  title: string;
  animationDelay: string;
  iconType: 'image';
  iconSrc: string;
  svgPaths?: never;
  svgRect?: never;
  svgCircle?: never;
};

type CardConfig = CardConfigSvg | CardConfigImage;

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

  cardConfigs: {
    left: CardConfigSvg[];
    right: CardConfig[];
  } = {
    left: [
      {
        id: 'education',
        title: 'Formação Acadêmica',
        animationDelay: '',
        iconType: 'svg' as const,
        svgPaths: [
          'M22 10v6M2 10l10-5 10 5-10 5z',
          'M6 12v5c3 3 9 3 12 0v-5'
        ]
      },
      {
        id: 'experience',
        title: 'Experiências',
        animationDelay: '0.2s',
        iconType: 'svg' as const,
        svgPaths: [
          'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'
        ],
        svgRect: { x: '2', y: '7', width: '20', height: '14', rx: '2', ry: '2' }
      }
    ],
    right: [
      {
        id: 'certifications',
        title: 'Certificações',
        animationDelay: '',
        iconType: 'svg' as const,
        svgPaths: [
          'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11'
        ],
        svgCircle: { cx: '12', cy: '8', r: '6' }
      },
      {
        id: 'certificates',
        title: 'Certificados',
        animationDelay: '0.1s',
        iconType: 'image' as const,
        iconSrc: 'assets/icons/certificado.png'
      }
    ]
  };

  educationData = [
    {
      year: '2024 - 2027',
      title: 'Bacharelado em Sistemas de Informação',
      institution: 'Universidade Estácio de Sá',
      description: 'Formação completa para desenvolver sistemas que automatizam processos e aumentam a produtividade nas organizações.'
    }
  ];

  experienceData = [
    {
      year: '2025 - Atual',
      title: 'Sr. Assoc, Full-Stack Development',
      institution: 'Avanade',
      description: 'Desenvolvimento de aplicações web escaláveis usando Angular, Node.js, JavaScript, TypeScript e .NET.'
    },
    {
      year: '2024 - 2025',
      title: 'Assoc, Full-Stack Development',
      institution: 'Avanade',
      description: 'Desenvolvimento de aplicações web escaláveis usando Angular, Node.js, JavaScript, TypeScript e .NET.'
    },
    {
      year: '2023 - 2024',
      title: 'Estagiária de Processos e Sistemas',
      institution: 'Evolution',
      description: 'Atividades dos serviços de tecnologia da informação e atualização e criação de novos processos utilizando diagramas de fluxos de processos.'
    }
  ];

  certificationsData = [
    { year: '2025', title: 'Microsoft Certified: Azure AI Fundamentals', institution: 'Microsoft' },
    { year: '2025', title: 'GitHub Foundations', institution: 'GitHub' },
    { year: '2024', title: 'Microsoft Certified: Azure Fundamentals', institution: 'Microsoft' }
  ];

  certificatesData = [
    { year: '2025', title: 'Formação Microsoft AI Fundamentals (AI-900)', institution: 'DIO' },
    { year: '2025', title: 'GitHub Copilot Challenge', institution: 'Microsoft' },
    { year: '2025', title: 'GitHub4Women', institution: 'Microsoft' },
    { year: '2025', title: 'Security Girls', institution: 'Microsoft' },
    { year: '2025', title: 'Formação GitHub Certification', institution: 'DIO' },
    { year: '2025', title: 'Formação Cybersecurity Specialist', institution: 'DIO' },
    { year: '2025', title: 'Formação Lógica de Programação', institution: 'DIO' },
    { year: '2024', title: 'API - Application Programming Interface', institution: 'DevMedia' },
    { year: '2024', title: 'Formação Microsoft AZ-900 Certification', institution: 'DIO' }
  ];

  skillsData = [
    { name: 'JavaScript/Node.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'C#', level: 80 },
    { name: '.NET', level: 80 },
    { name: 'Docker/Kubernetes', level: 75 },
    { name: 'SQL Server', level: 75 },
    { name: 'Git/GitHub', level: 95 }
  ];

  toggleCard(cardName: string) {
    this.expandedCards[cardName] = !this.expandedCards[cardName];
  }

  isExpanded(cardName: string): boolean {
    return this.expandedCards[cardName];
  }

  hasMultipleItems(cardName: string): boolean {
    return this.cardItemsCount[cardName] > 1;
  }

  getCardData(cardId: string): any[] {
    const dataMap: { [key: string]: any[] } = {
      'education': this.educationData,
      'experience': this.experienceData,
      'certifications': this.certificationsData,
      'certificates': this.certificatesData
    };
    return dataMap[cardId] || [];
  }

  pageTitle() {
    return 'Currículo';
  }

  pageSubtitle() {
    return 'Experiência e formação';
  }

  summaryTitle() {
    return 'Resumo Profissional';
  }

  summaryText() {
    return 'Desenvolvedora Full-Stack com experiência em Angular, TypeScript, JavaScript, Node.js, C# e .NET. Focada em criar soluções escaláveis e de alta qualidade.';
  }

  skillsTitle() {
    return 'Minhas Habilidades';
  }
}
