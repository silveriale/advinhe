/**
 * @file Componente `LettersUsed` responsável por exibir as letras já utilizadas no jogo,
 * indicando visualmente se estavam corretas ou incorretas.
 */

import styles from "./styles.module.css";
import { Letter } from "../Letter";

/**
 * Tipo que representa uma letra utilizada no jogo.
 *
 * @property {string} value - Letra jogada pelo usuário.
 * @property {boolean} correct - Indica se a letra estava correta (true) ou incorreta (false).
 */
export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

/**
 * Propriedades esperadas pelo componente `LettersUsed`.
 *
 * @property {LettersUsedProps[]} data - Lista de letras jogadas, incluindo valor e status de acerto.
 */
type Props = {
  data: LettersUsedProps[];
};

/**
 * Componente `LettersUsed`.
 * Renderiza uma seção com o título "Letras utilizadas" e a lista das letras já jogadas.
 * Cada letra é exibida em tamanho pequeno e com cor representando acerto ou erro.
 *
 * @returns {JSX.Element} Estrutura JSX da seção de letras usadas.
 */
export function LettersUsed({ data }: Props) {
  return (
    // Container principal da seção de letras utilizadas
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas:</h5>

      {/* Lista de letras utilizadas, com indicação de acerto (verde) ou erro (vermelho) */}
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
