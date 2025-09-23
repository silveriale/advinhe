/****
 * Componente Header para a aplicação de adivinhação.
 * Exibe o logo, o progresso atual em relação ao máximo de tentativas,
 * e um botão para reiniciar o jogo.
 */

import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";
import styles from "./styles.module.css";

/**
 * Props do componente Header.
 * @property {number} current - Número da tentativa atual.
 * @property {number} max - Número máximo de tentativas permitidas.
 * @property {() => void} onRestart - Função chamada para reiniciar o jogo.
 */
type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

/**
 * Componente Header que mostra o progresso das tentativas e permite reiniciar o jogo.
 * @param {Props} props - Propriedades do componente.
 * @returns JSX.Element com o layout do header.
 */
export function Header({ current, max, onRestart }: Props) {
  return (
    // Container principal do header com estilo aplicado
    <div className={styles.container}>
      {/* Imagem do logo */}
      <img src={logo} alt="Logo" />
      {/* Elemento header que contém o progresso e o botão */}
      <header>
        {/* Exibe o número atual de tentativas e o máximo */}
        <span>
          <strong>{current}</strong> de {max} tentativa
        </span>

        {/* Botão para reiniciar o jogo */}
        <button type="button" onClick={onRestart}>
          {/* Ícone do botão de reiniciar */}
          <img src={restart} alt="Ícobe de reiniciar" />
        </button>
      </header>
    </div>
  );
}
