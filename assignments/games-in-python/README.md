
# 📘 Atividade: Jogo da Forca

## 🎯 Objetivo

Construir um jogo da Forca em Python para praticar manipulação de strings, condicionais, loops e entrada de dados do usuário.

## 📝 Tarefas

### 🛠️	Preparar palavras e estado inicial do jogo

#### Descrição
Crie a base do jogo definindo uma lista de palavras possíveis, escolhendo uma palavra aleatoriamente e preparando as variáveis de controle da partida.

#### Requisitos
O programa concluído deve:

- Selecionar uma palavra aleatória de uma lista predefinida
- Inicializar a palavra oculta no formato `_ _ _` com o mesmo número de letras
- Definir uma quantidade inicial de tentativas incorretas restantes
- Armazenar letras já tentadas para evitar repetições


### 🛠️	Implementar os palpites e regras da partida

#### Descrição
Implemente o loop principal para receber letras do jogador, atualizar o progresso da palavra e encerrar o jogo com mensagem de vitória ou derrota.

#### Requisitos
O programa concluído deve:

- Aceitar palpites de uma letra por vez via entrada do usuário
- Atualizar a exibição da palavra quando a letra existir
- Reduzir tentativas restantes quando o palpite estiver incorreto
- Encerrar quando toda a palavra for descoberta ou quando as tentativas acabarem
- Exibir uma mensagem final de vitória ou derrota