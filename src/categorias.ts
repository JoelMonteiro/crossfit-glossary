// =============================================================
// categorias.ts — nome de cada categoria e ordem dos filtros.
// =============================================================

import type { Categoria } from "./tipos.ts";

export const CATEGORIAS: { id: Categoria; nome: string }[] = [
  { id: "jargao", nome: "Siglas e jargão" },
  { id: "formatos", nome: "Formatos de treino" },
  { id: "benchmarks", nome: "Benchmarks" },
  { id: "ginastica", nome: "Ginástica" },
  { id: "halterofilismo", nome: "Halterofilismo" },
  { id: "forca", nome: "Força" },
  { id: "kettlebell", nome: "Kettlebell e halteres" },
  { id: "cardio", nome: "Cardio" },
  { id: "equipamento", nome: "Equipamento" },
];

/** Nome a mostrar para uma categoria. */
export function nomeCategoria(id: Categoria): string {
  return CATEGORIAS.find((c) => c.id === id)?.nome ?? id;
}
