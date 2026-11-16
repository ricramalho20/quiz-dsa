// Array de objetos: cada pergunta tem enunciado, opções, índice da correta e explicação.
export const perguntas = [
  {
    enunciado: "Qual instrução declara uma variável que não pode ser reatribuída?",
    opcoes: ["let", "const", "var", "function"],
    correta: 1,
    explicacao: "O const cria uma associação que não pode ser reatribuída. O let permite mudar o valor.",
  },
  {
    enunciado: "O que Number(\"abc\") produz em JavaScript?",
    opcoes: ["0", "undefined", "NaN", "null"],
    correta: 2,
    explicacao: "A conversão de um texto não numérico resulta em NaN (Not a Number).",
  },
  {
    enunciado: "Por que é melhor usar === do que == nas comparações?",
    opcoes: [
      "Porque é mais rápido de digitar",
      "Porque não faz coerção implícita de tipos",
      "Porque só funciona com números",
      "Porque substitui o if",
    ],
    correta: 1,
    explicacao: "O === compara valor e tipo, então \"100\" === 100 é falso e evita erros escondidos.",
  },
  {
    enunciado: "Qual laço executa o bloco de código pelo menos uma vez?",
    opcoes: ["for", "while", "do...while", "for...of"],
    correta: 2,
    explicacao: "No do...while a condição é testada só depois da primeira execução do corpo.",
  },
  {
    enunciado: "O que o método filter devolve?",
    opcoes: [
      "O mesmo array, alterado",
      "Um número com a quantidade de itens",
      "Um novo array só com os elementos que cumprem a condição",
      "O primeiro elemento do array",
    ],
    correta: 2,
    explicacao: "O filter cria um novo array e não altera o original.",
  },
  {
    enunciado: "Em um array, qual é o índice do primeiro elemento?",
    opcoes: ["0", "1", "-1", "length"],
    correta: 0,
    explicacao: "Os índices dos arrays começam em zero: notas[0] é o primeiro elemento.",
  },
  {
    enunciado: "Qual método associa uma função a um evento, como click?",
    opcoes: ["querySelector", "textContent", "preventDefault", "addEventListener"],
    correta: 3,
    explicacao: "O addEventListener liga uma função ao evento escolhido.",
  },
  {
    enunciado: "Qual é o tipo do valor lido em input.value?",
    opcoes: ["number", "string", "boolean", "object"],
    correta: 1,
    explicacao: "O input.value sempre é string, por isso é preciso converter com Number() antes de calcular.",
  },
];
