using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaJaime.entidades
{
    class Cachorro : Mamifero
    {
        public bool tipoLatido { get; set; }

        public Cachorro()
        {

        }
            
        public Cachorro(bool tipoLatido, string nome, int velocidade):base(nome, velocidade)
        {
            this.tipoLatido = tipoLatido;
        }
    }
}
