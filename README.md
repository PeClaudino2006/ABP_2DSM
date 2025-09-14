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
| 👤 Focal Point | A definir |
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

### 🚀 Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Backend**: Node.js + TypeScript
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker
- **Metodologia**: Scrum/Agile

</details>
