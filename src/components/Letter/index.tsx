/**
 * @file Este arquivo define o componente `Letter`, responsável por exibir
 * um caractere dentro de um bloco estilizado.
 * É utilizado no jogo para mostrar letras fixas ou digitadas, em tamanho padrão ou reduzido,
 * e com cores diferentes dependendo do status (padrão, correto ou incorreto).
 */

import styles from "./styles.module.css";

// Define o tipo das propriedades aceitas pelo componente
type Props = {
  value?: string; // Valor da letra a ser exibida, opcional
  size?: "default" | "small"; // Define o tamanho da letra: padrão ou reduzido
  color?: "default" | "correct" | "wrong"; // Define a cor do estado da letra: padrão, correta ou incorreta
};

/**
 * Componente `Letter`.
 * Renderiza um bloco estilizado exibindo uma letra.
 *
 * @param {Props} props - Objeto com as propriedades:
 *  - `value`: representa a letra exibida.
 *  - `size`: determina o tamanho da letra ("default" ou "small").
 *  - `color`: determina a cor do estado da letra ("default", "correct" ou "wrong").
 * @returns {JSX.Element} Estrutura JSX que renderiza a letra em tela.
 */
export function Letter({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    // Div principal responsável por aplicar dinamicamente as classes CSS de tamanho e cor
    // com base nos valores das propriedades `size` e `color` recebidas pelo componente
    <div
      className={`
    ${styles.letter}
    ${size === "small" && styles.letterSmall}
    ${color === "correct" && styles.letterCorrect}
    ${color === "wrong" && styles.letterWrong}`}
    >
      <span>{value}</span> {/* Exibe o valor da letra */}
    </div>
  );
}
