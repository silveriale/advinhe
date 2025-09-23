/**
 * @file Este arquivo define o componente `Input`, responsável por renderizar
 * um campo de entrada de texto estilizado.
 * Ele pode receber todas as propriedades padrão de um elemento `<input>`.
 */

import styles from "./styles.module.css";

// Define o tipo das propriedades aceitas pelo componente, herdando todas as props de um <input> padrão
type Props = React.ComponentProps<"input">;

/**
 * Componente `Input`.
 * Renderiza um campo de entrada de texto estilizado, permitindo o uso
 * de todas as propriedades nativas do elemento `<input>`.
 *
 * @param {Props} props - Propriedades herdadas de um elemento `<input>`.
 * @returns {JSX.Element} Um campo de entrada estilizado.
 */
export function Input({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />;
  // Renderiza um elemento <input> do tipo texto
  // Aplica a classe CSS definida em styles.input
  // Espalha todas as propriedades passadas em {...rest}
}
