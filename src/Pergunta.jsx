// Mostra uma pergunta e suas opções. Recebe tudo por props.
function Pergunta({ pergunta, numero, total, selecionada, confirmada, aoSelecionar }) {
  return (
    <section aria-labelledby="enunciado">
      <p className="contador">Pergunta {numero} de {total}</p>
      <h2 id="enunciado">{pergunta.enunciado}</h2>

      <div className="opcoes">
        {pergunta.opcoes.map((texto, i) => {
          let classe = "opcao";
          if (confirmada) {
            if (i === pergunta.correta) classe += " certa";
            else if (i === selecionada) classe += " errada";
          } else if (i === selecionada) {
            classe += " marcada";
          }

          return (
            <button
              key={i}
              type="button"
              className={classe}
              disabled={confirmada}
              onClick={() => aoSelecionar(i)}
            >
              {texto}
            </button>
          );
        })}
      </div>

      {confirmada && (
        <p className="explicacao" role="status">
          {selecionada === pergunta.correta ? "Resposta correta. " : "Resposta incorreta. "}
          {pergunta.explicacao}
        </p>
      )}
    </section>
  );
}

export default Pergunta;
