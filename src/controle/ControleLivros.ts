import Livro from "../modelo/Livro";

const livros: Livro[] = [
  {codigo: 1, codEditora: 1, titulo: "python", resumo: "Fala sobre python", autores: ["Eu"]},
  {codigo: 2, codEditora: 2, titulo: "java", resumo: "Fala sobre java", autores: ["Eu"]},
  {codigo: 3, codEditora: 3, titulo: "react", resumo: "Fala sobre react", autores: ["Ela"]}
];

export class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = livros.reduce((maiorCodigo, livro) => Math.max(maiorCodigo, livro.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivros;