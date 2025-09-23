/**
 * @file Este arquivo define o componente `LettersUsed`, responsável por exibir
 * a seção que lista as letras já utilizadas durante o jogo.
 */

import styles from "./styles.module.css";
import { Letter } from "../Letter";

/**
 * Componente `LettersUsed`.
 * Renderiza uma seção contendo o título "Letras utilizadas" e as letras já usadas.
 *
 * @returns {JSX.Element} Estrutura JSX que mostra a área destinada às letras usadas.
 */
export function LettersUsed() {
  return (
    // Container principal da seção de letras utilizadas
    <div className={styles.lettersUsed}>
      {/* Título da seção */}
      <h5>Letras utilizadas:</h5>

      {/* Lista de letras já utilizadas, renderizadas para o tamanho pequeno*/}
      <div>
        <Letter value="X" size="small" color="correct" />
        <Letter value="R" size="small" color="wrong" />
      </div>
    </div>
  );
}
