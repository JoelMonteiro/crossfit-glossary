// =============================================================
// main.ts — liga o HTML aos dados: desenha a lista de termos e
// atualiza-a quando se pesquisa ou se escolhe uma categoria.
// =============================================================

import "./style.css";
import { TERMOS } from "./termos.ts";
import { CATEGORIAS, nomeCategoria } from "./categorias.ts";
import { agruparPorLetra, contarPorCategoria, filtrarTermos } from "./pesquisa.ts";
import type { Categoria, Termo } from "./tipos.ts";

/** Procura um elemento pelo id e confirma que é do tipo esperado. */
function el<T extends HTMLElement>(id: string, tipo: { new (): T }): T {
  const elemento = document.getElementById(id);
  if (!(elemento instanceof tipo)) {
    throw new Error(`Elemento #${id} não encontrado ou de tipo errado`);
  }
  return elemento;
}

const ui = {
  subtitulo: el("subtitulo", HTMLParagraphElement),
  pesquisa: el("pesquisa", HTMLInputElement),
  categorias: el("categorias", HTMLDivElement),
  contagem: el("contagem", HTMLParagraphElement),
  lista: el("lista", HTMLDivElement),
  vazio: el("vazio", HTMLDivElement),
  limpar: el("limpar", HTMLButtonElement),
};

// ---------------------------------------------------------------
// Estado
// ---------------------------------------------------------------

/** Categoria escolhida (null = todas). */
let categoriaAtual: Categoria | null = null;

// ---------------------------------------------------------------
// Desenhar
// ---------------------------------------------------------------

/** Cria os botões de categoria, cada um com o número de termos. */
function desenharCategorias(): void {
  const contagem = contarPorCategoria(TERMOS);
  const opcoes: { id: Categoria | null; nome: string; total: number }[] = [
    { id: null, nome: "Todos", total: TERMOS.length },
    ...CATEGORIAS.map((c) => ({ id: c.id, nome: c.nome, total: contagem.get(c.id) ?? 0 })),
  ];

  for (const opcao of opcoes) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "categoria";
    botao.dataset.categoria = opcao.id ?? "";
    botao.textContent = opcao.nome;

    const numero = document.createElement("span");
    numero.className = "categoria-total";
    numero.textContent = String(opcao.total);
    botao.append(numero);

    botao.addEventListener("click", () => {
      categoriaAtual = opcao.id;
      atualizar();
    });
    ui.categorias.append(botao);
  }
}

/** Marca o botão da categoria escolhida. */
function marcarCategoria(): void {
  for (const botao of ui.categorias.querySelectorAll<HTMLButtonElement>(".categoria")) {
    const ativo = botao.dataset.categoria === (categoriaAtual ?? "");
    botao.classList.toggle("ativa", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  }
}

/** Cria o cartão de um termo. */
function criarCartao(termo: Termo): HTMLElement {
  const cartao = document.createElement("article");
  cartao.className = "termo";

  const topo = document.createElement("div");
  topo.className = "termo-topo";

  const nome = document.createElement("h3");
  nome.className = "termo-nome";
  nome.textContent = termo.nome;

  const categoria = document.createElement("span");
  categoria.className = `etiqueta etiqueta-${termo.categoria}`;
  categoria.textContent = nomeCategoria(termo.categoria);

  topo.append(nome, categoria);
  cartao.append(topo);

  if (termo.aliases && termo.aliases.length > 0) {
    const aliases = document.createElement("p");
    aliases.className = "termo-aliases";
    aliases.textContent = `Também: ${termo.aliases.join(", ")}`;
    cartao.append(aliases);
  }

  const descricao = document.createElement("p");
  descricao.className = "termo-descricao";
  descricao.textContent = termo.descricao;
  cartao.append(descricao);

  return cartao;
}

/** Desenha a lista. Sem pesquisa agrupa por letra; com pesquisa mostra por relevância. */
function desenharLista(termos: Termo[], comPesquisa: boolean): void {
  ui.lista.replaceChildren();

  if (comPesquisa) {
    const grelha = document.createElement("div");
    grelha.className = "grelha";
    grelha.append(...termos.map(criarCartao));
    ui.lista.append(grelha);
    return;
  }

  for (const [letra, doGrupo] of agruparPorLetra(termos)) {
    const secao = document.createElement("section");
    secao.className = "grupo";

    const titulo = document.createElement("h2");
    titulo.className = "letra";
    titulo.textContent = letra;

    const grelha = document.createElement("div");
    grelha.className = "grelha";
    grelha.append(...doGrupo.map(criarCartao));

    secao.append(titulo, grelha);
    ui.lista.append(secao);
  }
}

/** Volta a filtrar e desenhar tudo. Chamada sempre que a pesquisa ou a categoria mudam. */
function atualizar(): void {
  const texto = ui.pesquisa.value;
  const resultado = filtrarTermos(TERMOS, texto, categoriaAtual);

  marcarCategoria();
  desenharLista(resultado, texto.trim() !== "");

  ui.contagem.textContent = resultado.length === 1 ? "1 termo" : `${resultado.length} termos`;
  ui.vazio.hidden = resultado.length > 0;
}

// ---------------------------------------------------------------
// Eventos
// ---------------------------------------------------------------

ui.pesquisa.addEventListener("input", atualizar);

ui.limpar.addEventListener("click", () => {
  ui.pesquisa.value = "";
  categoriaAtual = null;
  atualizar();
  ui.pesquisa.focus();
});

// "/" põe o cursor na pesquisa; Esc limpa-a.
document.addEventListener("keydown", (evento) => {
  if (evento.key === "/" && document.activeElement !== ui.pesquisa) {
    evento.preventDefault();
    ui.pesquisa.focus();
  } else if (evento.key === "Escape" && document.activeElement === ui.pesquisa) {
    ui.pesquisa.value = "";
    atualizar();
  }
});

// ---------------------------------------------------------------
// Arranque
// ---------------------------------------------------------------

ui.subtitulo.textContent = `${TERMOS.length} siglas, formatos de treino e movimentos explicados.`;
desenharCategorias();
atualizar();
