# Frontend - Portfolio Rhayssa Kramer

<div align="center">

## 🚀 SPA Angular 19 com TypeScript 5.7

**Aplicação frontend interativa e responsiva com integração de APIs externas (GitHub, Dev.to)**

[![Angular](https://img.shields.io/badge/Angular-19.0-DD0031?style=for-the-badge&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-10%2B-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Stack Técnico](#-stack-técnico)
- [Arquitetura](#-arquitetura)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Setup e Instalação](#-setup-e-instalação)
- [Guia de Desenvolvimento](#-guia-de-desenvolvimento)
- [Componentes](#-componentes)
- [Serviços](#-serviços)
- [Roteamento](#-roteamento)
- [Configurações](#-configurações)
- [Performance e Otimizações](#-performance-e-otimizações)
- [Testes](#-testes)
- [Debugging](#-debugging)
- [Build e Deploy](#-build-e-deploy)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Visão Geral

O frontend é uma **Single Page Application (SPA)** construída com **Angular 19** que funciona como um portfólio interativo e responsivo. A aplicação:

- ✅ Carrega dados dinâmicos do GitHub e Dev.to via APIs
- ✅ Calcula proficiência técnica baseada em repositórios
- ✅ Oferece navegação fluida entre seções
- ✅ Suporta múltiplos idiomas (PT-BR, EN-US)
- ✅ Funciona perfeitamente em mobile, tablet e desktop
- ✅ Integra animações e efeitos visuais

### Público-alvo

- 👔 Recrutadores
- 🏢 Empresas em busca de talentos
- 👨‍💻 Desenvolvedores e tech enthusiasts
- 🔍 Pessoas interessadas em conhecer projetos e expertise

---

## 🔧 Stack Técnico

### Core Framework

```json
{
  "angular": "19.0.0+",
  "typescript": "5.7.0+",
  "rxjs": "7.8.0+",
  "zone.js": "0.15.0+"
}
```

### Build & Tooling

| Ferramenta | Versão | Propósito |
|-----------|--------|----------|
| Angular CLI | 19.0+ | Build, serve, code generation |
| Webpack | 5.x | Module bundler (via CLI) |
| esbuild | 0.24+ | Transpilation (via CLI) |
| Karma | 6.4+ | Test runner |
| Jasmine | 5.x | Testing framework |
| ESLint | 8.x+ | Linting e code quality |
| Prettier | 3.x | Code formatting |

### Bibliotecas Auxiliares

```typescript
// Internacionalização
@ngx-translate/core: ^15.0.0
@ngx-translate/http-loader: ^8.0.0

// HTTP & Data
@angular/common/http: 19.0+

// Animações
@angular/animations: 19.0+

// RxJS Utilities
rxjs: ^7.8.0
```

### Desenvolvimento

```bash
npm install -g @angular/cli@latest
npm install -g typescript@latest
npm install -g prettier@latest
npm install -g eslint@latest
```

---

## 🏛️ Arquitetura

### Arquitetura em Camadas

```
┌─────────────────────────────────────┐
│   Presentation (Componentes)        │
├─────────────────────────────────────┤
│   Services (Lógica de Negócio)      │
├─────────────────────────────────────┤
│   Models & Interfaces               │
├─────────────────────────────────────┤
│   HTTP Client & APIs Externas       │
└─────────────────────────────────────┘
```

### Padrões Implementados

#### 1. **Componentes Standalone**
Todos os componentes usam `standalone: true`, eliminando necessidade de NgModule:

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: '...',
})
export class ExampleComponent {}
```

#### 2. **Signals (Angular 19)**
Reatividade moderna sem Observables manuais:

```typescript
// Signal simples
count = signal(0);

// Signal computado
doubleCount = computed(() => this.count() * 2);

// Effect (lado)
effect(() => {
  console.log('Count changed:', this.count());
});

// Em template
{{ count() }}  <!-- Chamada de função -->
```

#### 3. **RxJS Observables**
Para operações assincronas complexas:

```typescript
// Service
getArticles(): Observable<Article[]> {
  return this.http.get('/api/articles').pipe(
    shareReplay(1),           // Cache
    catchError(() => of([])), // Error handling
  );
}

// Component
articles$ = this.service.getArticles();

// Template
<app-article *ngFor="let article of articles$ | async">
```

#### 4. **Smart/Dumb Components**
Separação clara de responsabilidades:

```typescript
// Smart (Container) - Lógica
@Component({
  selector: 'app-articles-container',
  standalone: true,
  imports: [ArticlesListComponent],
})
export class ArticlesContainerComponent implements OnInit {
  articles$ = this.service.getArticles();
  
  constructor(private service: ArticleService) {}
}

// Dumb (Presentational) - Apenas exibição
@Component({
  selector: 'app-articles-list',
  standalone: true,
  inputs: ['articles'],
  template: '<article *ngFor="let a of articles()">{{ a.title }}</article>'
})
export class ArticlesListComponent {
  articles = input<Article[]>([]);
}
```

#### 5. **Dependency Injection**
Desacoplamento e testabilidade:

```typescript
constructor(
  private http: HttpClient,
  private router: Router,
  private translateService: TranslateService,
) {}
```

---

## 📁 Estrutura de Pastas

```
frontend/
│
├── src/
│   ├── main.ts                         # Bootstrap (entry point)
│   ├── index.html                      # Template HTML base
│   ├── styles.css                      # Estilos globais
│   │
│   └── app/
│       ├── app.component.ts            # Componente raiz
│       ├── app.component.html          # Template raiz
│       ├── app.component.css           # Estilos globais do app
│       ├── app.config.ts               # Configuração do app (providers)
│       ├── app.routes.ts               # Definição de rotas
│       ├── app.ts                      # Bootstrapping (Nova API)
│       ├── welcome.guard.ts            # Route guard para Welcome
│       │
│       ├── pages/                      # 📄 Páginas (Route Components)
│       │   ├── home/                   # Home - Apresentação principal
│       │   │   ├── home.component.ts
│       │   │   ├── home.component.html
│       │   │   └── home.component.css
│       │   │
│       │   └── index/                  # Index - Landing page inicial
│       │       ├── index.component.ts
│       │       ├── index.component.html
│       │       └── index.component.css
│       │
│       ├── components/                 # 🧩 Componentes Reutilizáveis
│       │   ├── profile-card/           # Sidebar com informações pessoais
│       │   │   ├── profile-card.component.ts
│       │   │   ├── profile-card.component.html
│       │   │   └── profile-card.component.css
│       │   │
│       │   ├── particles/              # Background animado (Canvas)
│       │   │   ├── particles.component.ts
│       │   │   ├── particles.component.html
│       │   │   └── particles.component.css
│       │   │
│       │   ├── language-selector/      # Seletor de idioma
│       │   │   ├── language-selector.component.ts
│       │   │   ├── language-selector.component.html
│       │   │   └── language-selector.component.css
│       │   │
│       │   ├── blog/                   # Componente Blog (Artigos Dev.to)
│       │   │   ├── blog.component.ts
│       │   │   ├── blog.component.html
│       │   │   └── blog.component.css
│       │   │
│       │   ├── contact/                # Formulário de contato
│       │   │   ├── contact.component.ts
│       │   │   ├── contact.component.html
│       │   │   └── contact.component.css
│       │   │
│       │   ├── portfolio/              # Galeria de projetos
│       │   │   ├── portfolio.component.ts
│       │   │   ├── portfolio.component.html
│       │   │   └── portfolio.component.css
│       │   │
│       │   └── resume/                 # Componente Currículo
│       │       ├── resume.component.ts
│       │       ├── resume.component.html
│       │       └── resume.component.css
│       │
│       ├── services/                   # 🔧 Serviços (Lógica de Negócio)
│       │   ├── github.service.ts       # Integração GitHub API
│       │   ├── devto.service.ts        # Integração Dev.to API
│       │   ├── skills.service.ts       # Cálculo dinâmico de habilidades
│       │   ├── translation.service.ts  # Gerenciamento de tradução (i18n)
│       │   └── ...
│       │
│       ├── config/                     # ⚙️ Configurações
│       │   └── particles.config.ts     # Configuração de partículas
│       │
│       └── shared/                     # 🔄 Código Compartilhado
│           ├── guards/                 # Route Guards
│           ├── pipes/                  # Custom Pipes
│           ├── directives/             # Custom Directives
│           ├── models/                 # Interfaces e tipos
│           └── utilities/              # Funções utilitárias
│
├── public/                              # 🖼️ Assets Estáticos
│   ├── index.html
│   └── assets/
│       ├── icons/                      # Ícones SVG e PNG
│       └── images/                     # Imagens e fotos
│
├── dist/                                # 🏗️ Build de Produção
│   └── frontend/
│       ├── index.html
│       ├── main.*.js                   # Main bundle
│       ├── polyfills.*.js
│       ├── styles.*.css
│       └── assets/
│
├── node_modules/                        # Dependências npm
├── angular.json                         # Configuração Angular CLI
├── tsconfig.json                        # Configuração TypeScript (base)
├── tsconfig.app.json                    # Configuração app
├── tsconfig.spec.json                   # Configuração testes
├── package.json                         # Dependências do projeto
├── package-lock.json                    # Lock de dependências
├── vercel.json                          # Configuração Vercel
├── .eslintrc.json                       # Configuração ESLint
├── .prettierrc                          # Configuração Prettier
├── README.md                            # Este arquivo
└── .gitignore                           # Arquivos ignorados no git
```

---

## 🔧 Setup e Instalação

### 1. Pré-requisitos

```bash
# Verificar versões
node --version    # v18.0.0 ou superior
npm --version     # 9.0.0 ou superior
git --version     # 2.40.0 ou superior
```

### 2. Instalação

```bash
# Clonar repositório
git clone https://github.com/rhayssakramer/portfolio-devrhakramer.git
cd portfolio-devrhakramer/frontend

# Instalar dependências
npm install

# Verificar instalação
ng version
```

### 3. Instalar Angular CLI Globalmente (Opcional)

```bash
npm install -g @angular/cli@latest
```

---

## 👨‍💻 Guia de Desenvolvimento

### Servidor de Desenvolvimento

```bash
# Iniciar servidor com hot reload
npm start

# Ou usando ng serve diretamente
ng serve

# Com opções específicas
ng serve --open                    # Abre navegador automaticamente
ng serve --host 0.0.0.0           # Acessa de outras máquinas (rede)
ng serve --port 4300              # Usa porta 4300 em vez de 4200
ng serve --configuration production # Build de produção (mais lento, mais otimizado)
```

**Disponível em**: `http://localhost:4200`

### Code Scaffolding

```bash
# Gerar novo componente
ng generate component components/exemplo
# Shorthand: ng g c components/exemplo

# Gerar serviço
ng generate service services/exemplo
# Shorthand: ng g s services/exemplo

# Gerar pipe
ng generate pipe shared/pipes/exemplo
# Shorthand: ng g p shared/pipes/exemplo

# Gerar diretiva
ng generate directive shared/directives/exemplo
# Shorthand: ng g d shared/directives/exemplo

# Gerar interface
ng generate interface models/exemplo
# Shorthand: ng g i models/exemplo

# Listar todas as opções
ng generate --help
```

### Lint e Formatação

```bash
# Verificar código com ESLint
npm run lint

# Corrigir problemas de lint automaticamente
npm run lint:fix

# Formatar código com Prettier
npm run format

# Verificar formatação (sem alterar)
npm run format:check
```

### Build

```bash
# Build de desenvolvimento
ng build

# Build de produção (otimizado)
ng build --configuration production

# Build com análise de tamanho
ng build --stats-json
npm install -g webpack-bundle-analyzer
webpack-bundle-analyzer dist/frontend/stats.json
```

---

## 🧩 Componentes

### Componentes Principais

#### 1. **ProfileCard** (`components/profile-card/`)
Barra lateral com informações pessoais.

```typescript
// Input
@Input() name: string;
@Input() title: string;
@Input() photo: string;
@Input() social: SocialLinks[];

// Funcionalidade
- Exibe fotografia
- Links para redes sociais
- E-mail de contato
- Localização
```

#### 2. **Particles** (`components/particles/`)
Animação de fundo com Canvas.

```typescript
// Configuração via config file
particleConfig = {
  count: 50,
  size: 2-4,
  speed: 1-3,
  opacity: 0.5
}

// Atualiza on resize
@HostListener('window:resize')
onResize(): void
```

#### 3. **LanguageSelector** (`components/language-selector/`)
Seletor de idioma (PT-BR, EN-US).

```typescript
// Signals
currentLanguage = signal('pt-BR');
availableLanguages = signal(['pt-BR', 'en-US']);

// Persist em localStorage
localStorage.setItem('lang', newLang);
```

#### 4. **Blog** (`components/blog/`)
Listagem de artigos do Dev.to.

```typescript
// Integração com DevToService
articles$ = this.devtoService.getArticles();

// Features
- Fetch dinâmico
- Formatação de data
- Tempo de leitura
- Links para artigos completos
- Grid responsivo
```

#### 5. **Resume** (`components/resume/`)
Seção de currículo e habilidades.

```typescript
// Expandir/colapsar seções
expandedCards: Record<string, boolean> = {};

// Dados estáticos
educationData: Education[];
experienceData: Experience[];
certificationsData: Certification[];

// Skills dinâmicos
skillsData$ = this.skillsService.calculateSkills();
```

#### 6. **Portfolio** (`components/portfolio/`)
Galeria de projetos.

```typescript
// Dados de projetos
projects: Project[] = [
  {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    demo: string;
  }
];

// Filtro
selectedCategory = signal('all');
filteredProjects = computed(() => 
  this.projects.filter(...)
);
```

#### 7. **Contact** (`components/contact/`)
Formulário de contato.

```typescript
// Form Reactive
form = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  message: new FormControl('', [Validators.required, Validators.minLength(10)])
});

// Envio
onSubmit(): void {
  if (this.form.valid) {
    this.contactService.sendEmail(this.form.value).subscribe(...);
  }
}
```

---

## 🔧 Serviços

### GitHubService (`services/github.service.ts`)

```typescript
// Métodos principais
getUserRepositories(username: string): Observable<Repository[]>
getRepositoryLanguages(repo: Repository): Observable<Languages>
getUserProfile(username: string): Observable<UserProfile>

// Exemplo de uso
this.github.getUserRepositories('rhayssakramer').subscribe(repos => {
  console.log('Repositórios:', repos);
});
```

**API Endpoints utilizados**:
- `GET /users/{username}`
- `GET /users/{username}/repos`
- `GET /repos/{owner}/{repo}/languages`

### DevToService (`services/devto.service.ts`)

```typescript
// Métodos principais
getArticles(username: string): Observable<Article[]>
getArticleById(id: number): Observable<Article>

// Exemplo de uso
this.devto.getArticles('rhayssakramer').subscribe(articles => {
  console.log('Artigos:', articles);
});
```

**API Endpoints utilizados**:
- `GET /articles?username={username}`

### SkillsService (`services/skills.service.ts`)

```typescript
// Calcula skills dinamicamente
calculateSkillsFromGitHub(): Observable<Skill[]>
calculateCombinedSkills(
  githubSkills: Skill[],
  certifications: Certification[],
  experiences: Experience[]
): Skill[]

// Exemplo de uso
this.skills.calculateSkillsFromGitHub().subscribe(skills => {
  console.log('Skills calculadas:', skills);
});

// Resultado
[
  { name: 'TypeScript', level: 95, sources: { github: 95 } },
  { name: 'Angular', level: 90, sources: { github: 90 } },
  // ...
]
```

**Lógica de cálculo**:
1. Analisa repositórios do GitHub
2. Conta bytes de código por linguagem
3. Aplica peso baseado em recência
4. Cruza com certificações
5. Retorna score 0-100

### TranslationService (`services/translation.service.ts`)

```typescript
// Métodos principais
setLanguage(lang: string): void
getCurrentLanguage(): string
getTranslation(key: string): Observable<string>

// Exemplo de uso
this.translation.setLanguage('en');

// Template
{{ 'home.welcome' | translate }}

// Componente
this.translation.getTranslation('home.welcome').subscribe(text => {
  console.log(text); // "Welcome"
});
```

**Idiomas suportados**:
- 🇧🇷 `pt-BR` - Português Brasileiro
- 🇺🇸 `en-US` - English (USA)

---

## 🛣️ Roteamento

### Definição de Rotas (`app.routes.ts`)

```typescript
export const routes: Routes = [
  { path: '', component: IndexComponent },           // /
  { path: 'home', component: HomeComponent },        // /home
  { path: 'blog', component: BlogComponent },        // /blog
  { path: 'contact', component: ContactComponent },  // /contact
  { path: '**', redirectTo: '' }                      // Fallback
];
```

### Navegação

```typescript
// Injetar Router
constructor(private router: Router) {}

// Navegar programaticamente
this.router.navigate(['/home']);
this.router.navigate(['/blog', { tab: 'angular' }]);

// Router Link em Template
<a routerLink="/home">Home</a>
<a [routerLink]="['/blog']" [queryParams]="{ tab: 'angular' }">Blog</a>

// Verificar rota ativa
<a routerLink="/home" routerLinkActive="active">Home</a>
```

### Route Guards

```typescript
// Guard para Welcome Page
@Injectable({ providedIn: 'root' })
export class WelcomeGuard implements CanActivate {
  canActivate(): boolean {
    const visited = localStorage.getItem('welcomed');
    if (!visited) {
      localStorage.setItem('welcomed', 'true');
      return true;
    }
    return false;
  }
}

// Usar no route
{ path: '', canActivate: [WelcomeGuard], component: IndexComponent }
```

---

## ⚙️ Configurações

### Angular Config (`angular.json`)

```json
{
  "projects": {
    "frontend": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "styles": ["src/styles.css"],
            "scripts": [],
            "optimization": true,
            "sourceMap": false
          }
        },
        "serve": {
          "options": {
            "port": 4200,
            "host": "localhost"
          }
        }
      }
    }
  }
}
```

### TypeScript Config (`tsconfig.json`)

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --configuration production",
    "test": "ng test",
    "test:coverage": "ng test --code-coverage",
    "e2e": "ng e2e",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write \"src/**/*.{ts,html,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,html,css}\"",
    "analyze": "ng build --stats-json && webpack-bundle-analyzer dist/frontend/stats.json"
  }
}
```

---

## ⚡ Performance e Otimizações

### Change Detection Strategy

```typescript
@Component({
  selector: 'app-example',
  changeDetection: ChangeDetectionStrategy.OnPush  // Apenas quando inputs mudam
})
export class ExampleComponent {}
```

### Lazy Loading de Rotas

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  }
];
```

### Memoization com Computed

```typescript
filteredItems = computed(() => {
  // Só recalcula quando items() ou filter() mudam
  return this.items().filter(item => 
    item.name.includes(this.filter())
  );
});
```

### Cache com shareReplay

```typescript
articles$ = this.http.get('/api/articles').pipe(
  shareReplay(1)  // Cache 1 última emissão
);
```

### Unsubscribe Automático

```typescript
// Usar async pipe em template
<div *ngFor="let article of articles$ | async">
  {{ article.title }}
</div>

// Ou usar takeUntilDestroyed
constructor() {
  this.destroy$ = new Subject();
}

ngOnInit() {
  this.service.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe();
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### Build Size Analysis

```bash
# Gerar stats
ng build --stats-json

# Analisar com webpack-bundle-analyzer
npm install -g webpack-bundle-analyzer
webpack-bundle-analyzer dist/frontend/stats.json
```

---

## 🧪 Testes

### Unit Tests com Karma/Jasmine

```bash
# Executar testes
npm test

# Executar com coverage
npm run test:coverage

# Watch mode (re-executa ao salvar)
ng test --watch

# Sem watch (executa uma vez)
ng test --watch=false
```

### Exemplo de Teste

```typescript
describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let service: DevToService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent],
      providers: [
        {
          provide: DevToService,
          useValue: {
            getArticles: jasmine.createSpy('getArticles')
              .and.returnValue(of([]))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DevToService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load articles on init', () => {
    expect(service.getArticles).toHaveBeenCalled();
  });
});
```

### E2E Tests

```bash
# Executar testes e2e
npm run e2e

# Com navegador aberto
ng e2e --open
```

---

## 🔍 Debugging

### Console Browser

```typescript
// Logs úteis
console.log('Value:', this.myVar);
console.table(this.items);
console.error('Error:', error);
console.warn('Warning');
console.time('timer');
// ... código
console.timeEnd('timer');  // Mostra tempo de execução
```

### Angular DevTools

```bash
# Instalar extensão do Chrome/Firefox
# Angular DevTools - https://github.com/angular/angular/tree/main/devtools

# Com DevTools instalada, abre aba "Angular" no console
```

### RxJS DevTools

```typescript
// Adicionar tap para debug
articles$ = this.http.get('/api/articles').pipe(
  tap(articles => console.log('Articles loaded:', articles)),
  shareReplay(1)
);
```

### Source Maps

```bash
# Build com source maps
ng serve --source-map=true

# Agora o DevTools mostra código TypeScript original
```

---

## 🚀 Build e Deploy

### Build de Produção

```bash
# Build otimizado
npm run build:prod

# Output em dist/frontend/
# - main.*.js (minimizado)
# - styles.*.css (minimizado)
# - index.html (otimizado)
```

### Deploy em Vercel

```bash
# 1. Conectar GitHub ao Vercel
# 2. Vercel detecta Angular automaticamente
# 3. Build Command: npm run build
# 4. Output Directory: dist/frontend

# Deploy manual
npm install -g vercel
vercel
```

### Deploy em Firebase

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar
firebase init

# Deploy
firebase deploy
```

### Deploy em Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/frontend
```

---

## 🐛 Troubleshooting

### Problema: `Port 4200 já está em uso`

```bash
# Usar porta diferente
ng serve --port 4300

# Ou matar processo na porta 4200
# Windows (PowerShell)
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :4200
kill -9 <PID>
```

### Problema: `Module not found`

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Ou usar npm ci (mais seguro em CI/CD)
npm ci
```

### Problema: `Change Detection Issues`

```bash
# Usar OnPush strategy
changeDetection: ChangeDetectionStrategy.OnPush

# Forçar detecção manual
constructor(private cdr: ChangeDetectorRef) {}
this.cdr.markForCheck();
```

### Problema: `Memory Leak com Observables`

```typescript
// ❌ Errado - sem unsubscribe
this.service.data$.subscribe(data => {
  this.data = data;
});

// ✅ Certo - usar async pipe
{{ service.data$ | async as data }}

// ✅ Ou usar takeUntil
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.data$
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### Problema: `Build Size grande`

```bash
# Analisar bundle
npm run analyze

# Remover imports não utilizados
# Usar tree shaking

# Lazy load componentes pesados
const routes = [
  { path: 'heavy', loadComponent: () => import('./heavy').then(m => m.Heavy) }
];
```

### Problema: `API Rate Limiting`

```typescript
// Implementar cache
articles$ = this.http.get('/api/articles').pipe(
  shareReplay(1)  // Cacheia resultado
);

// Implementar debounce
search$ = new Subject<string>();

constructor() {
  this.search$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.http.get(`/search?q=${term}`))
  ).subscribe();
}
```

---

## 📚 Recursos Adicionais

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)
- [Angular CLI Reference](https://angular.io/cli)
- [GitHub API Docs](https://docs.github.com/en/rest)
- [Dev.to API Docs](https://docs.dev.to/api)

---

## 💡 Best Practices

✅ **DO**:
- Usar `OnPush` change detection strategy
- Desinscrever de observables com `takeUntil`
- Usar async pipe em templates
- Fazer lazy load de rotas pesadas
- Usar signals para estado simples
- Implementar error handling robusto
- Escrever testes unitários
- Manter componentes pequenos e focados

❌ **DON'T**:
- Usar `Default` change detection desnecessariamente
- Deixar observables sem unsubscribe
- Criar muitos subscriptions manuais
- Botar toda lógica em componentes
- Fazer requisições HTTP em componentes
- Ignorar TypeScript strict mode
- Committar node_modules ou dist/

---

## 📞 Suporte

Para problemas ou dúvidas:

- 📧 Email: [rhayssakramer@gmail.com](mailto:rhayssakramer@gmail.com)
- 🐙 GitHub: [@rhayssakramer](https://github.com/rhayssakramer)
- 💼 LinkedIn: [rhayssakramer](https://linkedin.com/in/rhayssakramer)

---

<div align="center">

### Desenvolvido com ❤️ usando Angular 19 e TypeScript

© 2026 Rhayssa Kramer. Todos os direitos reservados.

</div>
