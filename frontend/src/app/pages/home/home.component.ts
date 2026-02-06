import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../components/particles/particles.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { TranslationService } from '../../services/translation.service';

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
  Array = Array;
  translationService = inject(TranslationService);

  tabs = computed(() => {
    // Forçar reatividade lendo o signal
    const currentLang = this.translationService.currentLanguage();
    console.log('Tabs computed - current language:', currentLang);
    return [
      { id: 'about' as const, label: this.translationService.translate('nav.about') },
      { id: 'resume' as const, label: this.translationService.translate('nav.resume') },
      { id: 'portfolio' as const, label: this.translationService.translate('nav.portfolio') },
      { id: 'blog' as const, label: this.translationService.translate('nav.blog') },
      { id: 'contact' as const, label: this.translationService.translate('nav.contact') }
    ];
  });

  // Traduções da página About
  aboutTitle = computed(() => this.translationService.translate('about.title'));
  aboutIntro = computed(() => this.translationService.translate('about.intro'));
  aboutDescription = computed(() => this.translationService.translate('about.description'));
  professionalTitle = computed(() => this.translationService.translate('about.professionalTitle'));
  featuredProjectsTitle = computed(() => this.translationService.translate('about.featuredProjects'));
  stacksToolsTitle = computed(() => this.translationService.translate('about.stacksTools'));

  features = computed(() => {
    const lang = this.translationService.currentLanguage();
    return [
      {
        icon: 'assets/icons/frontend.png',
        alt: this.translationService.translate('feature.webdev.title'),
        title: this.translationService.translate('feature.webdev.title'),
        description: this.translationService.translate('feature.webdev.desc')
      },
      {
        icon: 'assets/icons/backend.png',
        alt: this.translationService.translate('feature.backend.title'),
        title: this.translationService.translate('feature.backend.title'),
        description: this.translationService.translate('feature.backend.desc')
      },
      {
        icon: 'assets/icons/security.png',
        alt: this.translationService.translate('feature.security.title'),
        title: this.translationService.translate('feature.security.title'),
        description: this.translationService.translate('feature.security.desc')
      },
      {
        icon: 'assets/icons/devops.png',
        alt: this.translationService.translate('feature.devops.title'),
        title: this.translationService.translate('feature.devops.title'),
        description: this.translationService.translate('feature.devops.desc')
      },
      {
        icon: 'assets/icons/database.png',
        alt: this.translationService.translate('feature.data.title'),
        title: this.translationService.translate('feature.data.title'),
        description: this.translationService.translate('feature.data.desc')
      },
      {
        icon: 'assets/icons/cloud.png',
        alt: this.translationService.translate('feature.cloud.title'),
        title: this.translationService.translate('feature.cloud.title'),
        description: this.translationService.translate('feature.cloud.desc')
      }
    ];
  });

  featuredProjects = computed(() => {
    const lang = this.translationService.currentLanguage();
    return [
      {
        svgViewBox: '0 0 24 24',
        svgFill: 'white',
        svgType: 'path',
        svgContent: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.23 2.88.11 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.82.57C20.56 21.78 24 17.3 24 12 24 5.37 18.63 0 12 0z',
        title: this.translationService.translate('project.github.title'),
        link: 'https://github.com/rhayssakramer/github-certification',
        linkText: this.translationService.translate('project.github.linkText'),
        description: this.translationService.translate('project.github.desc')
      },
      {
        svgViewBox: '0 0 32 32',
        svgFill: 'none',
        svgType: 'rects',
        svgContent: [
          { x: '17', y: '17', width: '10', height: '10', fill: '#ffffff' },
          { x: '5', y: '17', width: '10', height: '10', fill: '#ffffff' },
          { x: '17', y: '5', width: '10', height: '10', fill: '#ffffff' },
          { x: '5', y: '5', width: '10', height: '10', fill: '#ffffff' }
        ],
        title: this.translationService.translate('project.microsoft.title'),
        link: 'https://github.com/rhayssakramer/microsoft-certification',
        linkText: this.translationService.translate('project.microsoft.linkText'),
        description: this.translationService.translate('project.microsoft.desc')
      }
    ];
  });

  skillsData = [
    { name: 'HTML', icon: 'html', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
    { name: 'CSS', icon: 'css', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
    { name: 'Bootstrap', icon: 'bootstrap', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
    { name: 'jQuery', icon: 'jquery', url: 'https://api.jquery.com/' },
    { name: 'Angular', icon: 'angular', url: 'https://angular.dev/overview' },
    { name: 'React', icon: 'react', url: 'https://pt-br.react.dev/' },
    { name: 'Vue', icon: 'vue', url: 'https://br.vuejs.org/v2/guide/index.html' },
    { name: 'JavaScript', icon: 'javascript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
    { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/docs/latest/api/' },
    { name: 'npm', icon: 'npm', url: 'https://docs.npmjs.com/' },
    { name: 'TypeScript', icon: 'typescript', url: 'https://www.typescriptlang.org/pt/docs/' },
    { name: 'C#', icon: 'cs', url: 'https://learn.microsoft.com/pt-br/dotnet/csharp/' },
    { name: '.NET', icon: 'dotnet', url: 'https://dotnet.microsoft.com/pt-br/platform/try-dotnet' },
    { name: 'Java', icon: 'java', url: 'https://docs.oracle.com/en/java/', isSkillIcon: true },
    { name: 'Spring', icon: 'spring', url: 'https://docs.spring.io/spring-framework/reference/index.html', isSkillIcon: true },
    { name: 'Python', icon: 'python', url: 'https://docs.python.org/pt-br/', isSkillIcon: true },
    { name: 'Django', icon: 'django', url: 'https://docs.djangoproject.com/pt-br/5.1/', isSkillIcon: true },
    { name: 'SQL Server', icon: 'sqlserver', url: 'https://learn.microsoft.com/pt-br/sql/?view=sql-server-ver16', customSrc: 'https://github.com/rhayssakramer/rhayssakramer/blob/main/img/sqlserver.svg?raw=true', width: 48 },
    { name: 'MySQL', icon: 'mysql', url: 'https://dev.mysql.com/doc/' },
    { name: 'MongoDB', icon: 'mongodb', url: 'https://www.mongodb.com/pt-br/docs/' },
    { name: 'PostgreSQL', icon: 'postgres', url: 'https://www.postgresql.org/docs/' },
    { name: 'Git', icon: 'git', url: 'https://git-scm.com/docs/git/pt_BR' },
    { name: 'GitHub', icon: 'github', url: 'https://docs.github.com/pt' },
    { name: 'GitLab', icon: 'gitlab', url: 'https://docs.gitlab.com/' },
    { name: 'Markdown', icon: 'md', url: 'https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax' },
    { name: 'Azure', icon: 'azure', url: 'https://learn.microsoft.com/pt-br/azure/' },
    { name: 'Visual Studio', icon: 'visualstudio', url: 'https://learn.microsoft.com/pt-br/visualstudio/windows/?view=vs-2022' },
    { name: 'VS Code', icon: 'vscode', url: 'https://code.visualstudio.com/docs' },
    { name: 'OpenShift', icon: 'openshift', url: 'https://docs.openshift.com/' },
    { name: 'Red Hat', icon: 'redhat', url: 'https://docs.redhat.com/pt-br' },
    { name: 'Swagger', icon: 'swagger', url: 'https://swagger.io/docs/', customSrc: 'https://github.com/rhayssakramer/rhayssakramer/blob/main/img/swagger.svg?raw=true', width: 48 },
    { name: 'PowerShell', icon: 'powershell', url: 'https://learn.microsoft.com/pt-br/powershell/' },
    { name: 'Notion', icon: 'notion', url: 'https://www.notion.com/pt/help/guides/category/documentation' },
    { name: 'Figma', icon: 'figma', url: 'https://help.figma.com/hc/pt-br' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://learn.microsoft.com/en-us/linkedin/' }
  ];

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
