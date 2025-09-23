/**
 * @file Este arquivo define o componente `Tip`, responsável por exibir
 * uma dica com um ícone e um texto descritivo. 
 * É utilizado no jogo para fornecer dicas ao usuário.
 */

import styles from "./styles.module.css"; 
import tipIcon from "../../assets/tip.svg"; 

/**
 * Propriedades esperadas pelo componente `Tip`.
 * @typedef {Object} Props
 * @property {string} tip - Texto da dica a ser exibida.
 */
type Props = {
  tip: string; // Texto da dica a ser exibida
};

/**
 * Componente `Tip`.
 * Exibe um bloco com um ícone e um texto de dica.
 *
 * @param {Props} props - Objeto contendo a propriedade `tip`.
 * @returns {JSX.Element} Estrutura JSX que renderiza a dica.
 */
export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}> {/* Container principal do componente com a classe de estilo aplicada */}
      <img src={tipIcon} alt="Ícone de dica" /> {/* Exibe o ícone representando a dica */}

      <div> {/* Container para o título e o texto da dica */}
        <h3>Dica:</h3> {/* Título fixo "Dica:" */}
        <p>{tip}</p> {/* Exibe o texto da dica recebido via props */}
      </div>
    </div>
  );
}
