import { useState, useEffect } from "react";
import ControleLivros from '../src/controle/ControleLivros';
import ControleEditora from '../src/controle/ControleEditora';

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);
  const autores = livro.autores.map((autor, index) => (
    <li key={index}>{autor}</li>
  ));
  const handleDelete = () => {
    excluir(livro.codLivro);
  };
  return (
    <tr>
      <td><button onClick={handleDelete}>Excluir</button></td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {autores}
        </ul>
      </td>
      <td>{livro.anoPublicacao}</td>
    </tr>
  );
}

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function carregarLivros() {
      const livros = await ControleLivros.obterLivros();
      setLivros(livros);
      setCarregado(true);
    }

    if (!carregado) {
      carregarLivros();
    }
  }, [carregado]);

  function excluir(codigo) {
    ControleLivros.excluirLivro(codigo);
    setCarregado(false);
  }

  const linhasLivros = livros.map((livro) => (
    <LinhaLivro key={livro.codLivro} livro={livro} excluir={excluir} />
  ));

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Excluir</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ano de Publicação</th>
          </tr>
        </thead>
        <tbody>{linhasLivros}</tbody>
      </table>
    </main>
  );
}

export default LivroLista;
