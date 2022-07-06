using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaJaime.entidades
{
    public class Animal
    {
        public string nome { get; set; }

        public Animal(string nome)
        {
            this.nome = nome;
        }

        public void Imprime()
        {
            Console.WriteLine("Imprimir");

        }

        public void Falar(string tipo)
        {
            Console.WriteLine(tipo);
        }
    }
}
