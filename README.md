# Glossário de CrossFit

Glossário de siglas, formatos de treino e movimentos de CrossFit, explicados em português.
Feito em TypeScript com Vite.

## Correr

```powershell
npm install
npm run dev
```

- `npm run build` gera a versão final na pasta `dist` (para pôr no cPanel, numa pasta ou subdomínio).
- `npm run verificar` só verifica os tipos.

## Ficheiros

| Ficheiro | O que faz |
| --- | --- |
| `src/termos.ts` | Todos os termos (para acrescentar, copia um bloco e muda os valores) |
| `src/categorias.ts` | Nomes e ordem das categorias |
| `src/tipos.ts` | Formato dos dados (`Termo`, `Categoria`) |
| `src/pesquisa.ts` | Pesquisa, ordenação e agrupamento por letra |
| `src/main.ts` | Liga o HTML aos dados |
| `src/style.css` | Visual, com modo claro e escuro |

## Atalhos

- `/` vai para a pesquisa
- `Esc` limpa a pesquisa
