import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService, Skill } from '../../services/skills.service';

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
export class ResumeComponent implements OnInit {
  private skillsService = inject(SkillsService);
  skillsData: Skill[] = [];
  expandedCards: { [key: string]: boolean } = {
    education: false,
    experience: false,
    events: false,
    certifications: false,
    certificates: false,
    skills: false
  };

  // Quantidade de itens em cada card
  cardItemsCount: { [key: string]: number } = {
    education: 1,
    experience: 3,
    events: 3,
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
      },
      {
        id: 'events',
        title: 'Eventos',
        animationDelay: '0.4s',
        iconType: 'svg' as const,
        svgPaths: [
          'M19 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5-2v4m-4-4v4m-5 10h14'
        ]
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
    }
  ];

  experienceData = [
    {
      year: '2025 - Atual',
      title: 'Assoc, Full-Stack Development',
      institution: 'Avanade',
      description: 'Desenvolvimento de aplicações web escaláveis usando Angular, Node.js, JavaScript, TypeScript e .NET.'
    },
    {
      year: '2024 - 2025',
      title: 'New Assoc, Full-Stack Development',
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

  eventsData = [
    {
      year: '2026',
      title: 'Awsome Women Community Brasil 3ª Edição 2026',
      institution: 'AWSome Women Community Summit Brasil',
      description: 'Evento tecnológico focado em capacitação, liderança e computação em nuvem, organizado por e para mulheres.'
    },
    {
      year: '2025',
      title: 'Recn Play 7ª Edição 2025',
      institution: 'RECn Play',
      description: 'Festival de tecnologia, inovação e economia criativa realizado no Recife Antigo, em Pernambuco.'
    },
    {
      year: '2025',
      title: 'Tech Woman 3ª Edição 2025',
      institution: 'TECH WOMAN REC',
      description: 'Um movimento e o maior encontro de mulheres na tecnologia em Pernambuco.'
    },
    {
      year: '2024',
      title: 'Recn Play 6ª Edição 2024',
      institution: 'RECn Play',
      description: 'Festival de tecnologia, inovação e economia criativa realizado no Recife Antigo, em Pernambuco.'
    },
    {
      year: '2024',
      title: 'Tech Woman 2ª Edição 2024',
      institution: 'TECH WOMAN REC',
      description: 'Um movimento e o maior encontro de mulheres na tecnologia em Pernambuco.'
    },
    {
      year: '2024',
      title: 'DIO Campus Expert 7',
      institution: 'DIO',
      description: 'Programa de embaixadores universitários da plataforma DIO.'
    },
    {
      year: '2023',
      title: 'Computação em Nuvem | AWS Discovery Day',
      institution: 'Ka Solution',
      description: 'Evento projetado para ensinar os fundamentos da computação em nuvem.'
    },
    {
      year: '2022',
      title: 'Devops Days Recife 2022',
      institution: 'CESAR',
      description: 'Conferência de desenvolvimento (Dev) e operações (Ops), com foco central na disseminação da cultura DevOps.'
    }
  ];

  certificationsData = [
    { year: '2025', title: 'Microsoft Certified: Azure AI Fundamentals', institution: 'Microsoft', credential: 'https://learn.microsoft.com/pt-br/users/rhayssakramer/credentials/91fdc88b65ac4845' },
    { year: '2025', title: 'GitHub Foundations', institution: 'GitHub', credential: 'https://www.credly.com/badges/6e55153c-ec45-4865-8a04-55c19ba83640' },
    { year: '2024', title: 'Microsoft Certified: Azure Fundamentals', institution: 'Microsoft', credential: 'https://learn.microsoft.com/pt-br/users/rhayssakramer/credentials/5b9fff1edfc93fb3' },
    { year: '2023', title: 'Cybersecurity Essentials', institution: 'Cisco', credential: 'https://www.credly.com/badges/52f9ec22-8908-4419-b35d-630c6968664c' }
  ];

  certificatesData = [
    { year: '2025', title: 'FAST - Engenharia de Plataforma', institution: 'CESAR' },
    { year: '2025', title: 'BEGINNER LEVEL', institution: 'SEDA College' },
    { year: '2025', title: 'Formação Microsoft AI Fundamentals (AI-900)', institution: 'DIO' },
    { year: '2025', title: 'Microsoft - Fundamentos de IA', institution: 'DIO' },
    { year: '2025', title: 'GitHub Copilot Challenge', institution: 'Microsoft' },
    { year: '2025', title: 'GitHub4Women 2025', institution: 'Microsoft + WoMakersCode' },
    { year: '2025', title: 'Security Girls Brasil 2025', institution: 'Microsoft' },
    { year: '2025', title: 'GitHub Copilot Bootcamp 2025', institution: 'Microsoft' },
    { year: '2025', title: 'Formação Github Certification', institution: 'DIO' },
    { year: '2025', title: 'Formação Cybersecurity Specialist', institution: 'DIO' },
    { year: '2025', title: 'Formação Lógica de Programação', institution: 'DIO' },
    { year: '2024', title: 'Certificado de autoridade: REST', institution: 'DevMedia' },
    { year: '2024', title: 'API - Application Programming Interface', institution: 'DevMedia' },
    { year: '2024', title: 'Formação Microsoft AZ-900 Certification', institution: 'DIO' },
    { year: '2024', title: 'Microsoft Azure Essentials', institution: 'DIO' },
    { year: '2024', title: 'SI Associate Quiz', institution: 'MongoDB' },
    { year: '2024', title: 'Formação AWS Cloud Practitioner Certification', institution: 'DIO' },
    { year: '2024', title: 'Programa Decola Tech 2024', institution: 'Impacta Tecnologia' },
    { year: '2024', title: 'AWS re/Start Graduate', institution: 'AWS + Escola da Nuvem' },
    { year: '2024', title: 'Meu Futuro Tech', institution: 'Descomplica' },
    { year: '2024', title: 'Fundamento de Redes de Computadores', institution: 'Descomplica' },
    { year: '2024', title: 'Coaching e Planejamento de Carreira', institution: 'Descomplica' },
    { year: '2024', title: 'Fundamentos de Banco de Dados', institution: 'Descomplica' },
    { year: '2024', title: 'Organização de Produtividade Remota', institution: 'Descomplica' },
    { year: '2024', title: 'Bootcamp Decola Tech Avanade 2024', institution: 'DIO' },
    { year: '2023', title: 'Certificado de autoridade: JavaScript', institution: 'DevMedia' },
    { year: '2023', title: 'Certificado de autoridade: Algoritmo', institution: 'DevMedia' },
    { year: '2023', title: 'Certificado de autoridade: CSS', institution: 'DevMedia' },
    { year: '2023', title: 'Certificado de autoridade: HTML', institution: 'DevMedia' },
    { year: '2023', title: 'Capacitação - Computação na Nuvem', institution: 'Ka Solution' },
    { year: '2023', title: 'Trilha Digital | Web Front-End', institution: 'Ada' },
    { year: '2023', title: 'Trilha Digital | B3 | Java', institution: 'Ada' },
    { year: '2023', title: 'Santander Bootcamp 2023 - Fullstack Java+Angular', institution: 'Santander + DIO' },
    { year: '2023', title: 'Trilha | iFood | Back-End', institution: 'Ada' },
    { year: '2023', title: 'Versionamento de Código com Git e GitHub', institution: 'DIO' },
    { year: '2023', title: 'Desenvolvimento Web - Front End', institution: 'Descomplica' },
    { year: '2023', title: 'Certificado de autoridade: Programação', institution: 'DevMedia' },
    { year: '2023', title: 'Algoritmo com o Portugol Studio', institution: 'Curso em Vídeo' },
    { year: '2023', title: 'Lógica de Programação - Teoria e Prática', institution: 'SoulCode Academy' },
    { year: '2023', title: 'Algoritmos', institution: 'Curso em Vídeo' },
    { year: '2023', title: 'Pensamento Computacional', institution: 'Fundação Bradesco' },
    { year: '2023', title: 'Fundamentos de Lógica de Programação', institution: 'Fundação Bradesco' }
  ];

  ngOnInit() {
    // Carregar skills dinamicamente do GitHub + Certificações
    this.skillsService.calculateSkillsFromGitHub().subscribe(
      githubSkills => {
        // Combinar com dados de certificações para score mais preciso
        const allCertifications = [...this.certificationsData, ...this.certificatesData];
        
        const combinedSkills = this.skillsService.calculateCombinedSkills(
          githubSkills,
          allCertifications,
          [] // experiências (podem ser adicionadas depois)
        );
        
        this.skillsData = combinedSkills.length > 0 ? combinedSkills : this.getDefaultSkills();
      },
      error => {
        console.error('Erro ao carregar skills:', error);
        this.skillsData = this.getDefaultSkills();
      }
    );
  }

  getDefaultSkills(): Skill[] {
    return [
      { name: 'JavaScript/Node.js', level: 95, sources: { github: 95 } },
      { name: 'TypeScript', level: 90, sources: { github: 90 } },
      { name: 'Angular', level: 90, sources: { github: 90 } },
      { name: 'Node.js', level: 85, sources: { github: 85 } },
      { name: 'C#', level: 80, sources: { github: 80 } },
      { name: '.NET', level: 80, sources: { github: 80 } },
      { name: 'Docker/Kubernetes', level: 75, sources: { github: 75 } },
      { name: 'SQL Server', level: 75, sources: { github: 75 } },
      { name: 'Git/GitHub', level: 95, sources: { github: 95 } }
    ];
  }

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
      'events': this.eventsData,
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
