import Editora from "../modelo/Editora";


const editoras: Editora[] = [
  { codEditora: 1, nome: "Eu" },
  { codEditora: 2, nome: "Ela" },
  { codEditora: 3, nome: "Nós" }
];

export class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.filter((editora) => editora.codEditora === codEditora)[0];
    return editora ? editora.nome : "";
  }
}

export default ControleEditora;

