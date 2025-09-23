/**
 * Este arquivo define o tipo `Challenge` e uma lista de desafios (`WORDS`),
 * onde cada desafio contém uma palavra e uma dica relacionada.
 * Ele é utilizado no jogo/adivinhação para fornecer os termos e suas dicas.
 */

/**
 * Representa um desafio contendo:
 * - `id`: Identificador único do desafio.
 * - `word`: Palavra que deve ser adivinhada.
 * - `tip`: Dica associada à palavra.
 */
export type Challenge = {
  id: number; // Identificador único do desafio
  word: string; // Palavra que deve ser adivinhada
  tip: string; // Dica sobre a palavra
};

/**
 * Lista de desafios disponíveis no jogo.
 * Cada item segue o formato definido pelo tipo `Challenge`.
 */
export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilos" }, // Desafio 1: Palavra "CSS" com a dica correspondente
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" }, // Desafio 2: Palavra "REACT" com sua dica
  { id: 3, word: "HTML", tip: "Linguagem de marcação" }, // Desafio 3: Palavra "HTML" com sua dica
  {
    id: 4,
    word: "Javascript",
    tip: "Uma das linguagens de programação mais utilizadas no mundo",
  }, // Desafio 4: Palavra "Javascript" com a dica sobre sua popularidade
  { id: 5, word: "Typescript", tip: "Para adicionar tipagem no Javascript" }, // Desafio 5: Palavra "Typescript" com a dica sobre tipagem
];
