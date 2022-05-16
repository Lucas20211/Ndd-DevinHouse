import { IComida } from 'src/app/modules/comida.model';

export const  LISTA_COMIDAS_MOCK: IComida[] = [
    {
      id: 10,
      titulo: " BATATA FRITA",
      enderecoImagem: "/assets/img/batataFrita.png",
      descricao: "Porção batata frita de 500g",
      valor:  18.00
    },
    {
      id: 11,
      titulo: " COMBO HAMBURGUER",
      enderecoImagem: "/assets/img/combohamburguerCoca.png",
      descricao: "Combo Hamburguer com Coca-Cola",
      valor: 26.00
    },
    {
      id: 12,
      titulo: " PORÇÃO CAMARÃO",
      enderecoImagem: "/assets/img/porcaoCamarao.jpg",
      descricao: "Porção Camarão de 600g",
      valor: 23.00
    },
    {
      id: 13,
      titulo: " PORÇÃO PEIXE",
      enderecoImagem: "/assets/img/porcaoPeixe.jpg",
      descricao: "Porção Peixe 600g",
      valor: 24.00
    }
  ];