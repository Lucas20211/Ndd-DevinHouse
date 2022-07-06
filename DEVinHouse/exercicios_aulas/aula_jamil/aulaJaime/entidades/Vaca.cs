using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaJaime.entidades
{
    internal class Vaca : Mamifero
    {

        public bool permiteOrdenha { get; set; }

        public Vaca(string nome, int velocidade, bool permiteOrdenha) :base (nome, velocidade)
        {
            this.permiteOrdenha = permiteOrdenha;
        }

        public Vaca()
        {

        }

        public void Ordenha()
        {
            Console.WriteLine("Ordenhado...");
        }

    }
}
