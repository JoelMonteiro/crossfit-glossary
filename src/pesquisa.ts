// =============================================================
// pesquisa.ts — filtrar, ordenar e agrupar os termos.
// Não mexe no HTML: recebe dados e devolve dados.
// =============================================================

import type { Categoria, Termo } from "./tipos.ts";

/** Texto em minúsculas e sem acentos, para "magnesio" encontrar "Magnésio". */
export function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase()
    .trim();
}

/**
 * Relevância de um termo para a pesquisa:
 *   3 = o nome ou uma alias começa pela pesquisa
 *   2 = o nome ou uma alias contém a pesquisa
 *   1 = só a descrição contém a pesquisa
 *   0 = não corresponde
 */
function relevancia(termo: Termo, pesquisa: string): number {
  const nomes = [termo.nome, ...(termo.aliases ?? [])].map(normalizar);
  if (nomes.some((n) => n.startsWith(pesquisa))) return 3;
  if (nomes.some((n) => n.includes(pesquisa))) return 2;
  if (normalizar(termo.descricao).includes(pesquisa)) return 1;
  return 0;
}

/** Ordena por nome, ignorando maiúsculas e acentos. */
function compararNome(a: Termo, b: Termo): number {
  return a.nome.localeCompare(b.nome, "pt", { sensitivity: "base", numeric: true });
}

/**
 * Filtra os termos pela categoria (null = todas) e pelo texto da pesquisa.
 * Sem pesquisa, a ordem é alfabética; com pesquisa, os mais relevantes vêm primeiro.
 */
export function filtrarTermos(termos: Termo[], textoPesquisa: string, categoria: Categoria | null): Termo[] {
  const pesquisa = normalizar(textoPesquisa);
  const daCategoria = categoria === null ? termos : termos.filter((t) => t.categoria === categoria);

  if (pesquisa === "") return [...daCategoria].sort(compararNome);

  return daCategoria
    .map((termo) => ({ termo, pontos: relevancia(termo, pesquisa) }))
    .filter((r) => r.pontos > 0)
    .sort((a, b) => b.pontos - a.pontos || compararNome(a.termo, b.termo))
    .map((r) => r.termo);
}

/** Conta quantos termos há em cada categoria (para os números nos filtros). */
export function contarPorCategoria(termos: Termo[]): Map<Categoria, number> {
  const contagem = new Map<Categoria, number>();
  for (const termo of termos) {
    contagem.set(termo.categoria, (contagem.get(termo.categoria) ?? 0) + 1);
  }
  return contagem;
}

/** Agrupa termos já ordenados pela primeira letra do nome ("1RM" fica em "#"). */
export function agruparPorLetra(termos: Termo[]): [string, Termo[]][] {
  const grupos = new Map<string, Termo[]>();
  for (const termo of termos) {
    const inicial = normalizar(termo.nome).charAt(0).toUpperCase();
    const letra = /[A-Z]/.test(inicial) ? inicial : "#";
    const grupo = grupos.get(letra) ?? [];
    grupo.push(termo);
    grupos.set(letra, grupo);
  }
  return [...grupos.entries()];
}
