/**
 * @file Este arquivo define o componente `Letter`, responsável por exibir
 * um caractere dentro de um bloco estilizado.
 * É utilizado no jogo para mostrar letras fixas ou digitadas.
 */

import styles from "./styles.module.css";

// Define o tipo das propriedades aceitas pelo componente
type Props = {
  value?: string; // Valor da letra a ser exibida, opcional
};

/**
 * Componente `Letter`.
 * Renderiza um bloco estilizado exibindo uma letra.
 *
 * @param {Props} props - Objeto com a propriedade `value`, que representa a letra exibida.
 * @returns {JSX.Element} Estrutura JSX que renderiza a letra em tela.
 */
export function Letter({ value = "" }: Props) {
  return (
    <div className={styles.letter}>
      {" "}
      {/* Container estilizado que envolve a letra */}
      <span>{value}</span>{" "}
      {/* Exibe o valor da letra dentro de uma tag <span> */}
    </div>
  );
}
