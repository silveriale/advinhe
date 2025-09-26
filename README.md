# Adivinhe

Aplicação web feita em React para brincar de descobrir palavras a partir de dicas.
O jogador informa uma letra por rodada e o jogo revela se ela faz parte da palavra
secreta. As tentativas são limitadas — se todas forem usadas sem descobrir a
palavra, a rodada termina.

## Sobre o jogo

- Uma palavra e uma dica são sorteadas automaticamente na chegada à página.
- O usuário envia palpites de uma letra por vez; letras repetidas são rejeitadas.
- Letras corretas são marcadas na palavra e aumentam a pontuação parcial.
- O número total de tentativas disponíveis é o tamanho da palavra somado a uma
  margem de cinco palpites extras.
- Ao acertar todas as letras ou esgotar as tentativas, o jogo mostra uma mensagem
  e inicia uma nova rodada.

## Tecnologias

- React + TypeScript
- Vite
- CSS Modules

## Executando localmente

1. Instale as dependências com `npm install`.
2. Inicie o servidor de desenvolvimento com `npm run dev`.
3. Abra o endereço indicado no terminal para jogar.

## Próximos passos sugeridos

- Persistir o histórico de vitórias e derrotas em `localStorage`.
- Adicionar modo "palavra completa" para arriscar uma resposta final.
- Criar testes para garantir as regras de pontuação e limite de tentativas.
