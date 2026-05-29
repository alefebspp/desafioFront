# GitScope — Desafio Front-End Desbravador

Aplicação client-side que consulta a [API do GitHub](https://docs.github.com/en/rest) e exibe os repositórios mais populares de um usuário, com perfil, ordenação e detalhes de cada repositório.

**URL da aplicação**: https://git-scope.netlify.app

## Funcionalidades

- Busca por usuário do GitHub
- Perfil com avatar, bio, e-mail, seguidores e seguindo
- Listagem de repositórios ordenável (estrelas, nome, atualização, forks)
- Página de detalhes do repositório com link externo

## Stack

- React 19 + TypeScript + Vite
- React Router (rotas)
- Axios (requisições HTTP)
- Tailwind CSS v4 (estilização responsiva)
- Vitest + Testing Library (testes unitários)
- Playwright (testes e2e)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build e preview

```bash
npm run build
npm run preview
```

## Testes

```bash
# Unitários (watch)
npm test

# Unitários (CI)
npm run test:run

# E2E (inicia o dev server automaticamente)
npm run test:e2e

# E2E com UI
npm run test:e2e:ui
```

Na primeira execução dos testes e2e, instale os browsers do Playwright:

```bash
npx playwright install chromium
```

## Estrutura do projeto

Organização por feature (`bulletproof-react`):

```
src/
├── features/
│   ├── search/       # Busca inicial
│   ├── user/         # Perfil e listagem de repos
│   └── repository/   # Detalhes do repositório
├── components/ui/    # Componentes reutilizáveis
├── lib/              # Cliente HTTP (axios)
├── routes/           # Definição de rotas
└── types/            # Tipos da API GitHub
```

## Rotas

| Rota                               | Descrição               |
| ---------------------------------- | ----------------------- |
| `/`                                | Busca de usuário        |
| `/users/:username`                 | Perfil e repositórios   |
| `/users/:username/repos/:repoName` | Detalhes do repositório |

## APIs consumidas

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos`
- `GET https://api.github.com/repos/{owner}/{repo}`

## Demo

URL da aplicação: https://git-scope.netlify.app

---

Desafio original: Desbravador Software
