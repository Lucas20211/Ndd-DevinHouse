using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaJaime.entidades.Ave
{
    public class Papagaio : AveGenerica
    {
        public string Vocabulario { get; set; }

        public Papagaio(string nome, string cor,string vocabulario) : base(nome, cor)
        {
            Vocabulario = vocabulario;
        }
    }
}
