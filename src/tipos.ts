// =============================================================
// tipos.ts — formato dos dados do glossário.
// =============================================================

/** Categorias dos termos. */
export type Categoria =
  | "jargao"
  | "formatos"
  | "benchmarks"
  | "ginastica"
  | "halterofilismo"
  | "forca"
  | "kettlebell"
  | "cardio"
  | "equipamento";

export interface Termo {
  /** Nome como é usado no box (normalmente em inglês). */
  nome: string;
  categoria: Categoria;
  descricao: string;
  /** Outros nomes ou abreviaturas, também usados na pesquisa. */
  aliases?: string[];
}
