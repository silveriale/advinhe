/**
 * @file App.tsx
 * @module App
 * @description Componente raiz do jogo “Adivinhe”.
 * Gerencia estado global do jogo (palavra, tentativas, acertos) e orquestra a UI.
 *
 * @remarks
 * Usa `useState`/`useEffect` para ciclo do jogo e integra os componentes:
 * `Header`, `Tip`, `Input`, `Button`, `Letter` e `LettersUsed`.
 * Define a constante `ATTEMPTS_MARGIN` para calcular o limite de tentativas.
 *
 * @see ./components/Header
 * @see ./components/Tip
 * @see ./components/Input
 * @see ./components/Button
 * @see ./components/Letter
 * @see ./components/LettersUsed
 */

import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { WORDS } from "./utils/words";
import type { Challenge } from "./utils/words";
import { Tip } from "./components/Tip";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Letter } from "./components/Letter";
import { Header } from "./components/Header";
import { LettersUsed } from "./components/LettersUsed";
import type { LettersUsedProps } from "./components/LettersUsed";

const ATTEMPTS_MARGIN = 5; // Margem extra de tentativas além do tamanho da palavra

/**
 * Componente React principal da aplicação.
 * Gerencia o ciclo do jogo (início, tentativas e fim) e renderiza a interface.
 * Não recebe props.
 * @component
 * @returns {JSX.Element} Interface do jogo.
 */
export default function App() {
  const [score, setScore] = useState(0); // Estado que guarda a pontuação atual (quantidade de acertos)
  const [letter, setLetter] = useState(""); // Letras já digitadas pelo usuário

  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]); // Letras usadas e se estão corretas
  const [challenge, setChallenge] = useState<Challenge | null>(null); // Palavra atual e dica do desafio

  const [shake, setShake] = useState(false);

  /**
   * Reinicia o jogo caso o usuário confirme a ação.
   * @returns {void}
   */
  function handleRestartGame() {
    // Pergunta ao usuário se deseja realmente reiniciar o jogo
    const isConfirmed = window.confirm(
      "Você tem certeza que deseja confirmar?"
    );

    // Se confirmado, inicia um novo jogo
    if (isConfirmed) {
      startGame();
    }
  }
  //index = math.floor - arredonda o numero. (
  //math.random - gera um numero aleatorio.  *
  //words.length - pega o tamanho do array.)
  //randomWord - pega a palavra aleatoria da da array WORDS

  /**
   * Inicia um novo jogo selecionando uma palavra aleatória
   * e resetando os estados relacionados ao jogo.
   * @returns {void}
   */
  function startGame() {
    // Gera um índice aleatório baseado no tamanho do array WORDS
    const index = Math.floor(Math.random() * WORDS.length);
    // Seleciona a palavra aleatória do array
    const randomWord = WORDS[index];

    // Define o desafio atual com a palavra e sua dica
    setChallenge(randomWord);

    // Reseta a pontuação para zero
    setScore(0);
    // Reseta a letra digitada para string vazia
    setLetter("");
    // Limpa as letras usadas
    setLettersUsed([]);
  }

  /**
   * Confirma a letra digitada pelo usuário, atualizando os estados
   * de letras usadas, pontuação e verificando se a letra já foi usada.
   * @returns {void}
   */
  function handleConfirm() {
    // Se não houver desafio ativo, não faz nada
    if (!challenge) {
      return;
    }

    // Verifica se o campo de letra está vazio ou só com espaços
    if (!letter.trim()) {
      return alert("Digite uma letra!"); // Alerta para digitar uma letra
    }

    // Converte a letra digitada para maiúscula para padronização
    const value = letter.toUpperCase();
    // Verifica se a letra já foi usada anteriormente
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    );

    // Se a letra já foi usada, limpa o input e alerta o usuário
    if (exists) {
      setLetter("");
      return alert("Você já utilizou a letra: " + value);
    }

    // Conta quantas vezes a letra digitada aparece na palavra do desafio
    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    // Determina se a letra está correta (aparece na palavra)
    const correct = hits > 0;
    // Calcula a nova pontuação somando os acertos dessa letra
    const currentScore = score + hits;

    // Atualiza o array de letras usadas adicionando a nova letra e se está correta
    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    // Atualiza a pontuação atual
    setScore(currentScore);
    // Limpa o campo de letra para nova entrada
    setLetter("");

    if (!correct) {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  }

  /**
   * Encerra o jogo exibindo uma mensagem e reiniciando um novo jogo.
   * @param {string} message - Mensagem a ser exibida ao usuário.
   * @returns {void}
   */
  function endGame(message: string) {
    // Exibe o alerta com a mensagem final do jogo
    alert(message);
    // Reinicia o jogo
    startGame();
  }

  // useEffect para iniciar o jogo assim que o componente é montado
  useEffect(() => {
    startGame();
  }, []);

  // useEffect para verificar condições de fim de jogo sempre que a pontuação ou letras usadas mudam
  useEffect(() => {
    // Se não houver desafio ativo, não faz nada
    if (!challenge) {
      return;
    }

    // Timeout para dar um pequeno delay antes de verificar as condições
    setTimeout(() => {
      // Se a pontuação for igual ao tamanho da palavra, o usuário venceu
      if (score === challenge.word.length) {
        return endGame("Parabéns, você descobriu a palavra!");
      }

      // Define o limite de tentativas permitidas (tamanho da palavra + margem)
      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN;

      // Se o número de letras usadas atingir o limite, o jogo termina
      if (lettersUsed.length === attemptLimit) {
        return endGame("Que pena, você usou todas as tentativas");
      }
    }, 200);
  }, [score, lettersUsed.length]);

  // Se não houver desafio ativo, não renderiza nada
  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length} // Número atual de tentativas usadas
          max={challenge.word.length + ATTEMPTS_MARGIN} // Número máximo de tentativas permitidas
          onRestart={handleRestartGame} // Função para reiniciar o jogo
        />
        <Tip tip={challenge.tip} /> {/* Exibe a dica da palavra */}
        <div className={`${styles.word} ${shake && styles.shake}`}>
          {challenge.word.split("").map((letter, index) => {
            // Busca se a letra já foi usada e se está correta
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );

            // Renderiza o componente Letter com a letra e cor baseada na correção
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>
        <h4>Palpite:</h4>
        <div className={styles.guess}>
          <Input
            autoFocus // Foca automaticamente no input ao renderizar
            maxLength={1} // Limita a entrada a uma letra
            placeholder="?" // Placeholder do input
            value={letter} // Valor controlado do input
            onChange={(e) => setLetter(e.target.value)} // Atualiza o estado com o valor digitado
          />
          <Button title="Confirmar" onClick={handleConfirm} />{" "}
          {/* Botão para confirmar letra */}
        </div>
        <LettersUsed data={lettersUsed} /> {/* Exibe as letras já usadas */}
      </main>
    </div>
  );
}
