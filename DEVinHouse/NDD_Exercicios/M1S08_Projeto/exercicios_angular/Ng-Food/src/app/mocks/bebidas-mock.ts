import { IBebida } from 'src/app/modules/bebida.model';

export const   LISTA_BEBIDAS_MOCK: IBebida[] = [
    {
      id: 1,
      titulo: " BEBIDA COCA-COLA",
      enderecoImagem: "/assets/img/cocalata350.png",
      descricao: "Coca-cola Lata 350Ml",
      valor: 6.00
    },
    {
      id: 2,
      titulo: " BEBIDAS EISENBAHN PILSEN",
      enderecoImagem: "/assets/img/eisenbahnPilsen.png",
      descricao: "Eisenbahn Pilsen",
      valor: 9.00
    },
    {
      id: 3,
      titulo: " BEBIDAS PEPSI ",
      enderecoImagem: "/assets/img/pepsilata350.png",
      descricao: "Pepsi Lata",
      valor: 5.00
    },
    {
      id: 4,
      titulo: " BEBIDAS SUCO DE LARANJA",
      enderecoImagem: "/assets/img/sucodeLaranja.jpg",
      descricao: "Suco de Laranja",
      valor: 12.00
    }
  ];