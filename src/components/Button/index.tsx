/**
 * @file Este arquivo define o componente `Button`, responsável por renderizar
 * um botão estilizado que recebe um título e todas as propriedades nativas de um `<button>`.
 */

import styles from "./styles.module.css";

// Define o tipo das propriedades aceitas pelo componente, herdando todas as props de <button>
type Props = React.ComponentProps<"button"> & {
  title: string;
};

/**
 * Componente `Button`.
 * Renderiza um botão estilizado com título e suporte a todas as propriedades
 * padrão de um elemento `<button>`.
 *
 * @param {Props} props - Objeto contendo `title` (texto do botão) e demais props herdadas.
 * @returns {JSX.Element} Um botão estilizado exibindo o título passado.
 */
export function Button({ title, ...rest }: Props) {
  return (
    // Renderiza um botão do tipo "button", aplicando a classe CSS e repassando as props e exibe o título definido na propriedade `title`
    <button type="button" className={styles.button} {...rest}>
      {title}
    </button>
  );
}
