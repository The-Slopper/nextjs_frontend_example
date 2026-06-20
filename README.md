# Painel de Usuários (Next.js)

Aplicação Next.js (App Router) com página de painel e uma rota de API.

## Metadados

| Campo | Valor |
|-------|-------|
| Linguagem | JavaScript (JSX) |
| Framework | Next.js 14 (App Router) |
| Banco de dados | MySQL (rota de API) |
| Versão | 1.0.0 |
| Licença | MIT |
| Responsável | Equipe de Frontend |

## Descrição

A página exibe a lista de usuários e um campo de busca; a rota de API (`/api/usuarios`) lê e
grava usuários no banco.

## Estrutura

```
frontend/nextjs/app/
├── page.jsx
└── api/usuarios/route.js
```

## Como executar

```bash
npm install
npm run dev
# http://localhost:3000
```
