import { useState, useEffect } from "react";
import { perguntas } from "./dados.js";
import Pergunta from "./components/Pergunta.jsx";
import Resultado from "./components/Resultado.jsx";

const CHAVE = "quiz-dsa-progresso";

// Recupera o progresso salvo no navegador (se existir).
function carregarProgresso() {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo) return JSON.parse(salvo);
  } catch (erro) {
    console.log("Não foi possível ler o progresso salvo.", erro);
  }
  return { indice: 0, respostas: [], finalizado: false };
}

// Percorre as perguntas com um laço for e conta os acertos.
function calcularPontuacao(respostas) {
  let pontos = 0;
  for (let i = 0; i < perguntas.length; i++) {
    if (respostas[i] === perguntas[i].correta) {
      pontos++;
    }
  }
  return pontos;
}

function App() {
  const [progresso, setProgresso] = useState(carregarProgresso);
  const [selecionada, setSelecionada] = useState(null);

  const { indice, respostas, finalizado } = progresso;
  const confirmada = respostas.length > indice;

  // Sempre que o progresso muda, salva no localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(progresso));
    } catch (erro) {
      console.log("Não foi possível salvar o progresso.", erro);
    }
  }, [progresso]);

  function confirmarResposta() {
    if (selecionada === null) return;
    setProgresso({ ...progresso, respostas: [...respostas, selecionada] });
  }

  function avancar() {
    if (indice + 1 < perguntas.length) {
      setProgresso({ ...progresso, indice: indice + 1 });
    } else {
      setProgresso({ ...progresso, finalizado: true });
    }
    setSelecionada(null);
  }

  function reiniciar() {
    setProgresso({ indice: 0, respostas: [], finalizado: false });
    setSelecionada(null);
  }

  return (
    <main className="app">
      <header>
        <h1>Quiz de JavaScript</h1>
        <p className="subtitulo">Revisão de DSA 2026</p>
      </header>

      {finalizado ? (
        <Resultado
          pontuacao={calcularPontuacao(respostas)}
          perguntas={perguntas}
          respostas={respostas}
          aoReiniciar={reiniciar}
        />
      ) : (
        <>
          <Pergunta
            pergunta={perguntas[indice]}
            numero={indice + 1}
            total={perguntas.length}
            selecionada={confirmada ? respostas[indice] : selecionada}
            confirmada={confirmada}
            aoSelecionar={setSelecionada}
          />

          {confirmada ? (
            <button type="button" className="principal" onClick={avancar}>
              {indice + 1 < perguntas.length ? "Próxima pergunta" : "Ver resultado"}
            </button>
          ) : (
            <button
              type="button"
              className="principal"
              onClick={confirmarResposta}
              disabled={selecionada === null}
            >
              Confirmar resposta
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default App;
