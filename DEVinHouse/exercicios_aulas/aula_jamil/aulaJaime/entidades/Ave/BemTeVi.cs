using System;


namespace aulaJaime.entidades.Ave
{
    public class BemTeVi : AveGenerica
    {
        public string tipoCanto { get; set; }

        public BemTeVi(string nome, string cor, string tipoCanto) : base(nome, cor) 
        {
            this.tipoCanto = tipoCanto;
        }

        public BemTeVi()
        {

        }

        

    }
}
