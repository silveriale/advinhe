/**
 * @file Este arquivo define o componente `LettersUsed`, responsável por exibir
 * a seção que lista as letras já utilizadas durante o jogo.
 */

import styles from "./styles.module.css";

/**
 * Componente `LettersUsed`.
 * Renderiza uma seção que exibe o título "Letras utilizadas".
 *
 * @returns {JSX.Element} Estrutura JSX que mostra a área destinada às letras usadas.
 */
export function LettersUsed() {
  return (
    // Div container com classe CSS para estilização
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas:</h5>
    </div>
  );
}
