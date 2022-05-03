// Crie um arquivo typescript com o nome exercicio04.ts, nele crie uma classe chamada Filme com os atributos nome do tipo string, anoDeLancamento do tipo number e diretor do tipo string. Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).
class Filme{
    nome:string;
    anoDeLancamento: number;
    diretor: string;
}

let filme:any = {
    nome: "Homem-Aranha",
    anoDeLancamento: 2021,
    diretor: "Sam Raimi"
}


console.log(filme.nome, filme.anoDeLancamento);