import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Livro } from "../src/modelo/Livro";
import { ControleEditora } from "../src/controle/ControleEditora";
import { ControleLivros } from "../src/controle/ControleLivros";

function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => {
    return { value: editora.codEditora, text: editora.nome };
  });

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  function tratarCombo(event) {
    setCodEditora(Number(event.target.value));
  }

  function incluir(event) {
    event.preventDefault();
    const livro = new Livro(
      0,
      titulo,
      resumo,
      autores.split("\n"),
      codEditora
    );
    controleLivro.incluir(livro);
    navigate("/");
  }

  return (
    <main>
      <h2>Dados do Livro</h2>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores
          </label>
          <textarea
            className="form-control"
            id="autores"
            rows="3"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="codEditora" className="form-label">
            Editora
          </label>
          <select
            className="form-select"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
}

export default LivroDados;
