/**
 * @file Este arquivo define o componente `Letter`, responsável por exibir
 * um caractere dentro de um bloco estilizado.
 * É utilizado no jogo para mostrar letras fixas ou digitadas, em tamanho padrão ou reduzido.
 */

import styles from "./styles.module.css";

// Define o tipo das propriedades aceitas pelo componente
type Props = {
  value?: string; // Valor da letra a ser exibida, opcional
  size?: "default" | "small"; // Define o tamanho da letra: padrão ou reduzido
};

/**
 * Componente `Letter`.
 * Renderiza um bloco estilizado exibindo uma letra.
 *
 * @param {Props} props - Objeto com as propriedades:
 *  - `value`: representa a letra exibida.
 *  - `size`: determina o tamanho da letra ("default" ou "small").
 * @returns {JSX.Element} Estrutura JSX que renderiza a letra em tela.
 */
export function Letter({ value = "", size = "default" }: Props) {
  return (
    // Container estilizado que aplica classes diferentes conforme o tamanho selecionado
    <div
      className={`
    ${styles.letter}
    ${size === "small" && styles.letterSmall}`}
    >
      <span>{value}</span>
      {/* Exibe o valor da letra dentro de uma tag <span> */}
    </div>
  );
}
