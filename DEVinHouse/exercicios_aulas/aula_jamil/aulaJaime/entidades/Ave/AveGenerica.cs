using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaJaime.entidades.Ave
{
    public class AveGenerica : Animal 
    {

        public string cor { get; set; }

        public AveGenerica(string nome, string cor) : base(nome, cor)
        {
            this.cor = cor;
        }

        public void Voar(int altura)
        {
            Console.WriteLine($"Essa ave está voando na altura de  {altura} metro(s)");
;        }


    }
}
