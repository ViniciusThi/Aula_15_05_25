# Sistema de Lançamento de Notas

[![Sistema de Notas CI](https://github.com/seu-usuario/sistema-notas/actions/workflows/ci.yml/badge.svg)](https://github.com/seu-usuario/sistema-notas/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sistema-notas&metric=alert_status)](https://sonarcloud.io/dashboard?id=sistema-notas)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sistema-notas&metric=coverage)](https://sonarcloud.io/dashboard?id=sistema-notas)

Um sistema para lançamento de notas de alunos com validações, cálculos de média e exibição de resultados, integrado com CI (GitHub Actions) e análise de código (SonarCloud).

## Funcionalidades

- Lançamento de notas de alunos
- Validação de notas (entre 0 e 10)
- Cálculo automático da média
- Determinação da situação do aluno com base na média:
  - Média menor que 5: Reprovado
  - Média entre 5 e menor que 7: Recuperação
  - Média 7 ou superior: Aprovado
- Armazenamento local dos dados (localStorage)
- Listagem de todos os alunos cadastrados

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Jest (Testes Automatizados)
- GitHub Actions (CI)
- SonarCloud (Análise de Código)

## Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

## Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sistema-notas.git
cd sistema-notas
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto localmente:

```bash
npm start
```

O sistema estará disponível em `http://localhost:3000`.

## Testes

Para executar os testes automatizados:

```bash
npm test
```

Isso irá executar todos os testes e gerar relatórios de cobertura.

## Estrutura do Projeto

```
sistema-notas/
├── .github/               # Configurações do GitHub Actions
│   └── workflows/         # Workflows de CI
│       └── ci.yml         # Configuração do CI
├── js/                    # Código JavaScript
│   ├── app.js             # Lógica de interface
│   └── calculator.js      # Lógica de negócio
├── tests/                 # Testes automatizados
│   └── calculator.test.js # Testes da calculadora
├── coverage/              # Relatórios de cobertura (gerado)
├── index.html             # Página principal
├── style.css              # Estilos CSS
├── package.json           # Dependências e scripts
├── sonar-project.properties # Configuração do SonarCloud
└── README.md              # Documentação
```

## Screenshot da Aplicação

![Screenshot do Sistema de Notas](screenshot.png)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença ISC - veja o arquivo LICENSE para mais detalhes. 