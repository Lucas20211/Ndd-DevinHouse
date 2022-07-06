using System;
namespace Resolucao_Ex_1_Semana_5_Modulo_2
{
    // Superclasse Empregado
    public class Empregado
    {
        // Atributos Empregado
        public int id { get; set; }
        public string nome { get; set; }

        // Construtores
        // Vazio
        public Empregado()
        {
        }

        // Com atributos
        public Empregado(int id, string nome)
        {
            this.id = id;
            this.nome = nome;
        }

        // M�todos
        public void Trabalhar()
        {
            Console.WriteLine("M�todo Trabalhar()");
        }

        public void IrEmbora()
        {
            Console.WriteLine("M�todo IrEmbora()");
        }

        public void TirarFolga()
        {
            Console.WriteLine("M�todo TirarFolga()");
        }
    }
}