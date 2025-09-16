# 🌊 Sistema de Visualização e Disseminação de Dados Limnológicos

Sistema web desenvolvido para visualização e disseminação de dados limnológicos coletados pelo INPE em cooperação com UFRJ, UFJF e IIE, com o objetivo de subsidiar estudos sobre o Balanço de Carbono nos Reservatórios de Furnas Centrais Elétricas S.A.

<details>
<summary><b>📋 Informações do Projeto</b></summary>

### 📊 Dados Básicos

| Categoria | Detalhes |
|-----------|----------|
| 📍 Instituição | FATEC Jacareí |
| 📚 Curso | DSM - 2º Semestre 2025 |
| 🔄 Metodologia | Aprendizagem Baseada em Projetos (ABP) |
| 👤 Focal Point | Arley Ferreira de Souza |
| 🤝 Parceiro | INPE - Laboratório de Instrumentação de Sistemas Aquáticos (labISA) |
| 📅 Kick off | 11/09/2025 às 19h30 |
| 📊 Status | Em desenvolvimento |

### 🎯 Tema do Semestre

Desenvolver uma aplicação web para visualização e disseminação de dados limnológicos, permitindo acesso aberto a informações coletadas em campanhas e pelo SIMA (Sistema Integrado de Monitoração Ambiental).

### 🔍 Desafio e Tipos de Dados

O INPE, UFRJ, UFJF e IIE, em cooperação com Furnas Centrais Elétricas S.A., coletaram vasto conjunto de dados limnológicos e meteorológicos. Para que essas informações possam ser utilizadas em pesquisas no Brasil e no exterior, é necessária uma plataforma que possibilite a disseminação e o acesso aberto a esses dados.

#### 📊 Tipos de Dados

- **Parâmetros limnológicos**: Coletados manualmente em diversos locais dos reservatórios, em curtos períodos de tempo (campanhas)
- **Dados do SIMA**: Coletados automaticamente durante longos períodos, em um único ponto do reservatório

### ⚙️ Requisitos Funcionais

- **RF01**: Visualizar todos os parâmetros armazenados, filtrando por instituição, reservatório e período de tempo
- **RF02**: Consultar e visualizar os dados no formato de tabelas
- **RF03**: Consultar e exportar os dados no formato CSV
- **RF04**: Consultar e visualizar a localização dos dados em um mapa interativo
- **RF05**: Exibir os dados de séries temporais (parâmetros coletados pelo SIMA) em gráficos

### 🛠️ Requisitos Não Funcionais

- **RNF01**: Interface intuitiva, clara e de fácil navegação para usuários sem conhecimento técnico
- **RNF02**: Desempenho otimizado com carregamento rápido dos dados
- **RNF03**: Interface seguindo padrões institucionais do INPE

### 🔧 Restrições de Projeto

- **RP01**: Dados armazenados no SGBD PostgreSQL
- **RP02**: Back-end desenvolvido em Node.js com TypeScript
- **RP03**: Front-end desenvolvido em React com TypeScript
- **RP04**: Aplicação utilizando containers independentes para banco de dados, back-end e front-end

### 📁 Estrutura do Projeto

#### 📝 Dailys
A pasta `Dailys/` contém os registros das reuniões diárias (Daily Scrums) da metodologia ágil Scrum, incluindo:
- ATA das reuniões diárias
- Resumo das atividades realizadas
- Impedimentos identificados
- Planejamento das próximas atividades
- Acompanhamento do progresso do projeto

#### 🏃‍♂️ Scrum
A pasta `Scrum/` armazena todos os artefatos e documentos relacionados à metodologia Scrum, incluindo:

**📋 Product Backlog**
- `Product Backlog/Product Backlog Completo.pdf` - Documento completo do Product Backlog com todas as histórias de usuário e requisitos do projeto

**🏃‍♂️ Sprints**
- `Sprints/Sprint 1/` - Pasta contendo os artefatos do Sprint 1
  - `Sprint Backlog/Sprint Backlog.pdf` - Documento do Sprint Backlog com as tarefas selecionadas para o Sprint 1

**📊 Burndown Chart**
- `Burndown Chart/Sprint 1/BurndownIdeal.png` - Gráfico de burndown ideal para acompanhamento do progresso do Sprint 1

**Outros artefatos Scrum:**
- Sprint Planning
- Sprint Review
- Retrospectivas
- Outros documentos da metodologia ágil

### 🚀 Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Backend**: Node.js + TypeScript
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker
- **Metodologia**: Scrum/Agile

### 🏗️ Arquitetura e Estrutura Técnica

#### 📂 Estrutura de Pastas

A organização do projeto segue uma separação clara entre bancos de dados (scripts e dados), servidor (código da aplicação) e configurações gerais.

```bash
app/
├── balcar-campanha/            
│   ├── csv/                       # Arquivos de dados (CSV) carregados nas tabelas
│   ├── copy-table.sql             # Script SQL para importar os arquivos CSV para o banco
│   ├── create-table.sql           # Script SQL para criar a estrutura das tabelas
│   └── balcar-campanha-modelo.xml # Modelo conceitual do banco, visualizável no DBDesigner
│  
├── furnas-campanha/
│   ├── csv/                       # Arquivos de dados (CSV) carregados nas tabelas
│   ├── copy-table.sql             # Script SQL para importar os arquivos CSV para o banco
│   ├── create-table.sql           # Script SQL para criar a estrutura das tabelas
│   └── furnas-campanha-modelo.xml # Modelo conceitual do banco, visualizável no DBDesigner
│   
├── sima/
│   ├── csv/                       # Arquivos de dados (CSV) específicos do SIMA
│   ├── copy-table.sql             # Script SQL para importação dos CSV
│   ├── create-table.sql           # Script SQL para criação das tabelas
│   └── sima-modelo.xml            # Modelo conceitual do banco SIMA (para DBDesigner)
│ 
├── server/
│   ├── src/                       # Código-fonte da aplicação
│   │   ├── configs/               # Configurações, como conexão com banco de dados
│   │   ├── controllers/           # Lógica de controle (recebem requisições, chamam serviços)
│   │   ├── routes/                # Definição das rotas da API
│   │   └── index.ts               # Arquivo principal que inicializa o servidor
│   ├── Dockerfile                 # Receita para construção da imagem Docker do servidor
│   ├── package.json               # Dependências e scripts NPM
│   └── tsconfig.json              # Configurações do compilador TypeScript
│
├── front/                        # Front-end React + Vite + styled-components
│   ├── src/
│   │   ├── api/                  # Consumo da API (axios)
│   │   ├── components/           # Componentes reutilizáveis
│   │   ├── pages/                # Páginas (ex.: SimaPage)
│   │   └── styles/               # GlobalStyle + ThemeProvider
│   ├── Dockerfile
│   ├── vite.config.ts
│   └── package.json
│
├── .github/workflows/ci.yml       # Pipeline de Integração Contínua
└── docker-compose.dev.yml         # Definições dos serviços Docker para ambiente de desenvolvimento
```

#### 🔑 Configurações Técnicas

**Back-end (`server/`)**
- Node.js + Express + TypeScript
- Estrutura em camadas (configs, controllers, routes)
- Conexão com múltiplos bancos via `pg.Pool`
- Middlewares: JSON parser, erro global, CORS configurado
- ESLint + Prettier para padronização de código
- Dockerfile com hot reload (ts-node-dev)

**Front-end (`front/`)**
- React + Vite + TypeScript
- styled-components com `ThemeProvider` global
- GlobalStyle para reset de estilos
- Barra Brasil + Menu responsivo
- Estrutura organizada (`api/`, `components/`, `pages/`, `styles/`)
- Axios configurado com `VITE_SERVER_PORT`

**Banco de Dados**
- PostgreSQL 17 (um container por domínio: furnas-campanha, sima, balcar-campanha)
- Scripts SQL para `CREATE TABLE` e `COPY FROM CSV`
- Volumes persistentes para dados
- Cada banco acessível em uma porta distinta (5433, 5434, 5435)

**CI/CD**
- GitHub Actions (`.github/workflows/ci.yml`)
- Pipeline roda automaticamente em push e pull requests para a branch `main`
- Estrutura de Jobs: `server-ci`, `front-ci` e `docker-ci`

### ▶️ Como Executar o Projeto

#### Com Docker (Recomendado)
```bash
# Subir todos os containers
docker compose -f docker-compose.dev.yml up --build -d

# Parar os containers
docker compose -f docker-compose.dev.yml down
```

#### Desenvolvimento Local
```bash
# Back-end
cd server
npm install
npm run dev
# API disponível em: http://localhost:3001

# Front-end
cd front
npm install
npm run dev
# App disponível em: http://localhost:3002
```

### 🌐 Acessando a Aplicação

- **Front-end (React)**: http://localhost:3002
- **Back-end (API Node)**: http://localhost:3001
  - Exemplo: http://localhost:3001/sima/sima/all?page=1&limit=20

### 🛠️ Boas Práticas Aplicadas

- Separação clara de camadas (DB / API / Front)
- Containers independentes para cada banco
- Hot reload para server e front em dev
- ESLint + Prettier (garantindo padronização de código)
- CI no GitHub Actions

</details>

## 👥 Nossa Equipe

### 🎯 Gestão

| **Função** | **Nome** | **Links** |
|------------|----------|-----------|
| **Product Owner** | **Alicia Silva Dias** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/TIALICIA) |
| **Scrum Master** | **João Victor Lopes Rosa** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/JV-L0pes) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/jv-l0pes) |


### 💻 Development Team

| **Nome** | **Links** |
|----------|-----------|
| **Pedro Claudino Nunes** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/PeClaudino2006) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/pedro-claudino-0566472b9) |
| **Manuela Lucia Lemes de Castro** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/manuelalemes) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manuela-lemes-castro) |
| **Gabrielly Neu dos Santos** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/Gabrielly209) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielly-neu-753906239) |
| **Leonardo da Silva Irineu** | [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/Leo-Slv) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-irineu-8418b0288) |

## 👨‍🏫 Coordenação e Orientação

| **Professor** |
|---------------|
| **Focal Point** | Arley Ferreira de Souza |
