// Mostra a pontuação final e a revisão de cada questão.
function Resultado({ pontuacao, perguntas, respostas, aoReiniciar }) {
  const total = perguntas.length;
  const aproveitamento = Math.round((pontuacao / total) * 100);

  let mensagem;
  if (aproveitamento >= 80) mensagem = "Ótimo resultado!";
  else if (aproveitamento >= 60) mensagem = "Bom resultado, vale revisar os erros.";
  else mensagem = "Revise o conteúdo e tente de novo.";

  return (
    <section aria-labelledby="titulo-resultado">
      <h2 id="titulo-resultado">Você acertou {pontuacao} de {total}</h2>
      <p className="nota">{aproveitamento}% de aproveitamento. {mensagem}</p>

      <ul className="revisao">
        {perguntas.map((p, i) => {
          const acertou = respostas[i] === p.correta;
          return (
            <li key={i} className={acertou ? "ok" : "erro"}>
              <strong>{acertou ? "Acertou" : "Errou"}:</strong> {p.enunciado}
              {!acertou && <span> Resposta certa: {p.opcoes[p.correta]}.</span>}
            </li>
          );
        })}
      </ul>

      <button type="button" className="principal" onClick={aoReiniciar}>
        Refazer o quiz
      </button>
    </section>
  );
}

export default Resultado;
