<div align="center">

# 💜 Portfolio - Rhayssa Kramer

**Desenvolvedora Full-Stack | DevSecOps**

Um portfolio interativo e responsivo que showcasa projetos, habilidades, experiência e artigos publicados. Desenvolvido com Angular 19 e TypeScript, integrando dados do GitHub e Dev.to em tempo real.

[![Frontend](https://img.shields.io/badge/Frontend-Angular%2019-DD0031?style=for-the-badge&logo=angular)](https://angular.io)
[![Language](https://img.shields.io/badge/Language-TypeScript%205.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Styling](https://img.shields.io/badge/Styling-CSS3%20%7C%20Responsive-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![API Integration](https://img.shields.io/badge/API-GitHub%20%7C%20Dev.to-000000?style=for-the-badge&logo=github)](https://api.github.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura](#%EF%B8%8F-arquitetura)
- [Tecnologias](#-tecnologias)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Executando o Projeto](#-executando-o-projeto)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [Performance](#-performance)
- [Segurança](#-segurança)
- [Créditos](#-créditos)

---

## 🌟 Sobre o Projeto

O **Portfolio** é uma aplicação web moderna e interativa que apresenta o trabalho, as habilidades e a história profissional de Rhayssa Kramer, uma desenvolvedora Full-Stack com experiência em **Angular**, **TypeScript**, **JavaScript**, **Node.js**, **C#** e **.NET**.

A plataforma integra dados em tempo real do GitHub e Dev.to para exibir:

- 💼 Experiência profissional e formação acadêmica
- 🛠️ Habilidades técnicas calculadas dinamicamente com base em repositórios GitHub
- 📚 Artigos publicados no Dev.to
- 🎯 Projetos destacados e portfólio completo
- 📖 Certificações e participações em eventos
- 📞 Formulário de contato direto

Ideal para **recrutadores**, **empresas**, **colaboradores** e **entusiastas de tecnologia** que desejam conhecer melhor o trabalho e a trajetória profissional.

---

## ✨ Funcionalidades

### Navegação Principal

#### 🏠 Home (Página Inicial)
- ✅ Apresentação pessoal com fotografia profissional
- ✅ Resumo executivo das principais habilidades
- ✅ Projetos em destaque com descrições
- ✅ Grid de tecnologias utilizadas com ícones
- ✅ Call-to-action para contato direto
- ✅ Efeito de partículas animadas de fundo
- ✅ Responsividade total (mobile, tablet, desktop)

#### 📄 Currículo (Resume)
- ✅ **Formação Acadêmica**: Bacharelado em Sistemas de Informação (Estácio)
- ✅ **Experiências Profissionais**: Avanade, Evolution e outras
- ✅ **Eventos**: Tech Woman, AWSome Women Community, RecPlay, etc.
- ✅ **Certificações**: Azure, GitHub, Cisco, MongoDB e mais
- ✅ **Certificados**: Bootcamps, cursos e formações (40+ certificados)
- ✅ **Habilidades Técnicas**: Calculadas dinamicamente do GitHub
- ✅ Expandir/Colapsar seções para melhor visualização
- ✅ Exportação em PDF (futuro)

#### 🎯 Portfolio
- ✅ Galeria de projetos realizados
- ✅ Descrição detalhada de cada projeto
- ✅ Links para repositório GitHub
- ✅ Links para deploy/demonstração
- ✅ Tecnologias utilizadas em cada projeto
- ✅ Imagens e captura de tela dos projetos
- ✅ Filtro por categoria/tecnologia

#### 📚 Blog
- ✅ Integração com API Dev.to
- ✅ Listagem de artigos publicados em tempo real
- ✅ Título, descrição, data e tempo de leitura
- ✅ Tags de categorização
- ✅ Imagem de capa do artigo
- ✅ Link direto para ler artigo completo
- ✅ Grid responsivo (3 colunas desktop, 1 coluna mobile)
- ✅ Alinhamento perfeito do profile card

#### 💬 Contato
- ✅ Formulário funcional para mensagens diretas
- ✅ Validação em tempo real dos campos
- ✅ Envio de e-mail via integração (backend)
- ✅ Mensagem de sucesso/erro
- ✅ Links de redes sociais (GitHub, LinkedIn, Email)
- ✅ Informações de localização (Olinda, Brasil)

### Componentes Transversais

#### 👤 Profile Card (Barra Lateral)
- ✅ Fotografia de perfil circulada
- ✅ Nome e título profissional
- ✅ Links para GitHub e LinkedIn
- ✅ E-mail de contato
- ✅ Localização
- ✅ Ícones com hover interativo
- ✅ Responsivo (oculta em mobile)
- ✅ **Alinhado com o conteúdo em todas as páginas**

#### 🌐 Seletor de Idioma
- ✅ Suporte para **Português (pt-BR)** e **Inglês (en-US)**
- ✅ Persistência da escolha em localStorage
- ✅ Tradução de todos os textos da interface
- ✅ Seletor visível e acessível

#### 🎨 Layout Responsivo
- ✅ Desktop (1920px+): Layout em 2 colunas (profile + conteúdo)
- ✅ Tablet (768px-1024px): Ajuste inteligente de espaçamento
- ✅ Mobile (<768px): Layout em coluna única, profile no topo
- ✅ Todos os elementos se adaptam perfeitamente

#### 🔄 Abas Navegáveis
- ✅ Navegação entre seções (Sobre, Currículo, Portfólio, Blog, Contato)
- ✅ Animação suave ao trocar de aba
- ✅ Estado ativo destacado visualmente
- ✅ URLs sem recarga (SPA)

### Recursos Avançados

#### 🧠 Cálculo Dinâmico de Skills
- ✅ Integração com GitHub API para análise de repositórios
- ✅ Cálculo automático de nível de proficiência por linguagem
- ✅ Cruzamento com dados de certificações
- ✅ Atualização em tempo real sem recarregar página
- ✅ Fallback para valores padrão em caso de erro

#### 🌙 Animações e Transições
- ✅ Efeito de partículas no fundo (Canvas)
- ✅ Fade-in suave ao carregar componentes
- ✅ Hover effects nos botões e cards
- ✅ Transição de cores ao trocar aba
- ✅ Scroll smooth entre seções

#### ♿ Acessibilidade
- ✅ Semântica HTML5 correta (nav, main, section, article)
- ✅ Atributos aria-label em elementos interativos
- ✅ Contraste de cores WCAG AA compliant
- ✅ Navegação por teclado funcional
- ✅ Suporte a leitores de tela

#### 📊 Performance
- ✅ Lazy loading de imagens
- ✅ Build otimizado com Angular CLI
- ✅ Minificação de CSS e JavaScript
- ✅ Cache de API integrado (RxJS)
- ✅ Carregamento progressivo do conteúdo

---

## 🏛️ Arquitetura

A aplicação segue a arquitetura padrão do Angular com modularização e separação de responsabilidades:

```
Frontend (SPA Angular 19)
    ↓
├── Pages
│   ├── Home (landing, intro)
│   ├── Resume (sobre, experiência, skills)
│   ├── Portfolio (projetos)
│   ├── Blog (artigos Dev.to)
│   └── Contact (formulário)
├── Components
│   ├── ProfileCard (sidebar)
│   ├── LanguageSelector (i18n)
│   └── Particles (background)
├── Services
│   ├── GitHubService (análise de repos)
│   ├── DevToService (artigos)
│   ├── SkillsService (cálculo de skills)
│   └── TranslationService (i18n)
└── Shared
    └── Utilities, Guards, Pipes
```

### Fluxo de Dados

```
User Interaction
    ↓
Component (TypeScript/Signal)
    ↓
Service (RxJS Observable)
    ↓
External API (GitHub, Dev.to)
    ↓
Service (Data transformation)
    ↓
Component (Display)
```

### Padrões Utilizados

- **Signals**: Reatividade moderna do Angular 19
- **RxJS**: Composição de observáveis
- **Smart/Dumb Components**: Separação de lógica e apresentação
- **Services**: Centralização da lógica de negócio
- **Dependency Injection**: Desacoplamento e testabilidade

---

## 💻 Tecnologias

### Frontend

| Categoria | Tecnologia | Versão | Propósito |
|-----------|-----------|--------|----------|
| Framework | Angular | 19+ | SPA e componentes |
| Linguagem | TypeScript | 5.7+ | Tipagem estática |
| Reatividade | Signals/RxJS | 7.8.0+ | Gerenciamento de estado |
| HTTP | HttpClientModule | 19+ | Requisições API |
| Internacionalização | @ngx-translate/core | 15+ | Multi-idioma |
| Build | Angular CLI | 19+ | Ferramentas de build |
| Deploy | Vercel | — | Hospedagem e CI/CD |

### APIs Externas

| API | Finalidade | Endpoints Utilizados |
|-----|-----------|----------------------|
| **GitHub API** | Análise de repositórios e linguagens | `/user/repos`, `/repos/{owner}/{repo}/languages` |
| **Dev.to API** | Listagem de artigos publicados | `/articles?username=rhayssakramer` |

### Bibliotecas Adicionais (Potencial)

| Biblioteca | Uso |
|-----------|-----|
| `ngx-translate` | Tradução dinâmica |
| `ngx-particles` | Efeito de partículas |
| `pdfkit` / `jspdf` | Exportar currículo em PDF |
| `ngx-infinite-scroll` | Scroll infinito no blog |

---

## 📁 Estrutura do Repositório

```
portfolio-devrhakramer/
├── README.md                               # Este arquivo
├── .gitignore                              # Arquivos ignorados
│
└── frontend/                               # SPA Angular 19
    ├── angular.json                        # Configuração do Angular
    ├── package.json                        # Dependências npm
    ├── package-lock.json                   # Lock de dependências
    ├── tsconfig.json                       # Configuração TypeScript
    ├── tsconfig.app.json                   # Config para app
    ├── tsconfig.spec.json                  # Config para testes
    ├── vercel.json                         # Configuração Vercel
    │
    ├── src/
    │   ├── main.ts                         # Bootstrap Angular
    │   ├── index.html                      # Template raiz
    │   ├── styles.css                      # Estilos globais
    │   │
    │   └── app/
    │       ├── app.component.ts            # Componente raiz
    │       ├── app.component.html          # Template raiz
    │       ├── app.component.css           # Estilos do app
    │       ├── app.routes.ts               # Definição de rotas
    │       ├── app.config.ts               # Configuração do app
    │       ├── app.ts                      # Bootstrap (standalone)
    │       │
    │       ├── pages/
    │       │   ├── home/                   # Home page
    │       │   │   ├── home.component.ts
    │       │   │   ├── home.component.html
    │       │   │   └── home.component.css
    │       │   ├── index/                  # Index/intro
    │       │   ├── blog/                   # Blog (Dev.to)
    │       │   │   ├── blog.component.ts
    │       │   │   ├── blog.component.html
    │       │   │   └── blog.component.css
    │       │   └── ...
    │       │
    │       ├── components/
    │       │   ├── profile-card/           # Sidebar profile
    │       │   │   ├── profile-card.component.ts
    │       │   │   ├── profile-card.component.html
    │       │   │   └── profile-card.component.css
    │       │   ├── language-selector/      # Seletor de idioma
    │       │   ├── particles/              # Background animado
    │       │   ├── resume/                 # Currículo
    │       │   ├── portfolio/              # Projetos
    │       │   ├── contact/                # Contato
    │       │   └── blog/                   # Artigos
    │       │
    │       ├── services/
    │       │   ├── github.service.ts       # Integração GitHub
    │       │   ├── devto.service.ts        # Integração Dev.to
    │       │   ├── skills.service.ts       # Cálculo de skills
    │       │   ├── translation.service.ts  # Tradução (i18n)
    │       │   └── ...
    │       │
    │       ├── config/
    │       │   └── particles.config.ts     # Config de partículas
    │       │
    │       └── shared/
    │           ├── guards/
    │           ├── pipes/
    │           └── utilities/
    │
    ├── public/
    │   ├── index.html                      # HTML público
    │   └── assets/
    │       ├── icons/                      # Ícones
    │       └── images/                     # Imagens
    │
    ├── dist/                               # Build de produção
    └── node_modules/                       # Dependências instaladas
```

---

## 📌 Pré-requisitos

### Para rodar localmente

- **Node.js** 18.0.0 ou superior
- **npm** 9.0.0 ou superior
- **Git** para clonar o repositório

### Verificar Instalação

```bash
node --version    # v18.0.0 ou superior
npm --version     # 9.0.0 ou superior
git --version     # 2.40.0 ou superior
```

### Opcional

- **Angular CLI** instalado globalmente (para commands extras)
  ```bash
  npm install -g @angular/cli@latest
  ```
- **Visual Studio Code** como editor

---

## 🔧 Instalação e Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/rhayssakramer/portfolio-devrhakramer.git
cd portfolio-devrhakramer/frontend
```

### 2. Instale as Dependências

```bash
npm install
```

Isso instalará todas as dependências listadas em `package.json`:
- Angular 19+
- TypeScript 5.7+
- RxJS 7.8+
- @ngx-translate/core
- E outras bibliotecas auxiliares

### 3. Configure as Variáveis de Ambiente (Opcional)

Crie um arquivo `.env` na raiz do projeto `frontend/`:

```env
# GitHub API (opcional - usa público por padrão)
GITHUB_USER=rhayssakramer
GITHUB_TOKEN=seu_token_github_opcional

# Dev.to Username
DEVTO_USERNAME=rhayssakramer

# API Base URL
API_BASE_URL=http://localhost:4200
```

> **Nota**: As variáveis de ambiente em Angular devem ser processadas em tempo de build ou injetadas via `environment.ts`.

### 4. Verificar Instalação

```bash
ng version
```

Deve exibir informações do Angular CLI, Angular core e TypeScript.

---

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
npm start
```

Ou alternativamente:

```bash
ng serve
```

Disponível em: **`http://localhost:4200`**

- **Hot reload** ativado automaticamente
- Compilação incremental
- Console com erros em tempo real

### Modo Build (Produção)

```bash
npm run build
```

Gera output otimizado em `dist/portfolio/`:
- Minificação de CSS/JS
- Tree shaking
- Lazy loading configurado
- Tamanho reduzido

### Testes

```bash
# Executar testes unitários
npm run test

# Executar testes e2e
npm run e2e

# Cobertura de testes
npm run test:coverage
```

### Lint e Formatação

```bash
# Verificar código
npm run lint

# Formatar código
npm run format
```

---

## 🌐 Variáveis de Ambiente

### Development (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  github: {
    owner: 'rhayssakramer',
    token: '', // Deixar vazio para usar API pública
  },
  devto: {
    baseUrl: 'https://dev.to/api',
    username: 'rhayssakramer',
  },
};
```

### Production (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://portfolio-devrhakramer.vercel.app',
  github: {
    owner: 'rhayssakramer',
    token: '', // Usar token seguro via env var ou secrets
  },
  devto: {
    baseUrl: 'https://dev.to/api',
    username: 'rhayssakramer',
  },
};
```

### Limites de Taxa (Rate Limiting)

| API | Limite | Sem Token |
|-----|--------|-----------|
| GitHub | 60 req/hora | 5000 req/hora com token |
| Dev.to | 10 req/minuto | 30 req/minuto com token |

---

## 🔧 Funcionalidades Técnicas

### 1. Cálculo Dinâmico de Skills

O `SkillsService` analisa repositórios do GitHub para calcular proficiência:

```typescript
// Análise automática de linguagens em repos
// Baseado em: linhas de código, frequência de uso, recência
// Cruzado com: certificações e experiências

Resultado: Score 0-100 para cada skill
```

### 2. Integração GitHub API

```typescript
// Fetch de repositórios públicos
GET /user/repos
  → Filtra por relevância
  → Extrai linguagens utilizadas
  → Calcula proficiência

// Análise de linguagens por repositório
GET /repos/{owner}/{repo}/languages
  → Conta bytes de código
  → Identifica skills utilizadas
```

### 3. Integração Dev.to API

```typescript
// Busca artigos publicados
GET /articles?username=rhayssakramer
  → Titulo, descrição, cover image
  → Data de publicação, tempo de leitura
  → Tags e categorias
  → Link direto para artigo
```

### 4. Sistema de Tradução (i18n)

Suporte a múltiplos idiomas via `TranslationService`:

```typescript
// Tradução dinâmica
{{ 'home.welcome' | translate }}

// Troca de idioma em runtime
this.translationService.setLanguage('en');
```

Idiomas suportados:
- 🇧🇷 Português Brasileiro (pt-BR)
- 🇺🇸 English (en-US)

### 5. Componentes Reutilizáveis

- **ProfileCard**: Exibição de informações pessoais
- **Particles**: Animação de fundo com Canvas
- **LanguageSelector**: Seletor de idioma
- **Blog, Resume, Portfolio**: Componentes de seção

---

## 📊 Performance

### Métricas Alvo

| Métrica | Alvo | Status |
|---------|------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ |
| **FID** (First Input Delay) | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ |
| **FCP** (First Contentful Paint) | < 1.8s | ✅ |
| **Lighthouse Score** | 90+ | ✅ |

### Otimizações Implementadas

- ✅ **Code Splitting**: Lazy loading de rotas
- ✅ **Tree Shaking**: Remoção de código não utilizado
- ✅ **Minificação**: CSS, JS e templates
- ✅ **Caching**: API responses em memória (RxJS shareReplay)
- ✅ **Image Optimization**: Responsive images, WebP
- ✅ **Preload**: Critical resources prefetched
- ✅ **OnPush Strategy**: Change detection otimizado

### Build Size

```
Bundle Size (gzipped):
├── main.js:      ~150 KB
├── styles.css:   ~50 KB
└── Total:        ~200 KB
```

---

## 🔐 Segurança

### Práticas Implementadas

- ✅ **XSS Protection**: Angular sanitiza todas as entradas HTML
- ✅ **CSRF Token**: Implementado em requisições POST
- ✅ **Content Security Policy**: Headers HTTP apropriados
- ✅ **HTTPS Only**: Redirect automático em produção
- ✅ **API Rate Limiting**: Proteção contra abuso
- ✅ **No Secrets**: Tokens sensíveis não commitados (`.gitignore`)

### Dependências Seguras

```bash
# Verificar vulnerabilidades
npm audit

# Atualizar dependências com segurança
npm update
```

---

## 🚢 Deployment

### Deploy em Vercel (Recomendado)

1. Conecte seu GitHub ao Vercel
2. Selecione este repositório
3. Configure:
   - **Framework**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/frontend`
4. Deploy automático a cada push

### Deploy Manual

```bash
# Build de produção
npm run build

# Servir localmente para testar
npm run start:prod

# Deploy para seu servidor
# (depende da sua infraestrutura)
```

---

## 📞 Suporte e Contato

- **GitHub**: [@rhayssakramer](https://github.com/rhayssakramer)
- **LinkedIn**: [linkedin.com/in/rhayssakramer](https://linkedin.com/in/rhayssakramer)
- **Email**: [rhayssakramer@gmail.com](mailto:rhayssakramer@gmail.com)
- **Dev.to**: [@rhayssakramer](https://dev.to/rhayssakramer)
- **Localização**: Olinda, Pernambuco 🇧🇷

---

# 👥 Créditos

<div align="center">
  <p><strong>Um portfolio que conta minha história técnica e profissional.</strong></p>
  <p>Desenvolvido com ❤️ em Angular, TypeScript e muita criatividade.</p>
</div>

## 👩🏼‍💻 Autora

<table>
  <tr>
    <td align="left">
      <a href="https://github.com/rhayssakramer">
        <strong>Rhayssa Kramer</strong>
      </a>
      <br>
      <span>Sr. Assoc, Full-Stack Development | Engenheira de Plataforma</span>
      <br>
      <small>Avanade | Tech Enthusiast | Community Speaker</small>
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a [MIT License](LICENSE).

---

## 🙏 Agradecimentos

- **Angular Team** pela excelente framework
- **GitHub** e **Dev.to** pelas APIs abertas
- **Vercel** pelo hosting e CI/CD
- **Comunidade tech** pelo suporte e inspiração

---

<div align="center">

### ⭐ Se este projeto foi útil, considere deixar uma estrela no GitHub!

© 2026 Rhayssa Kramer. Todos os direitos reservados.

<a href="https://github.com/rhayssakramer"><img src="https://github.com/rhayssakramer/rhayssakramer/blob/main/img/rodape.png" width="100%"></a>

</div>