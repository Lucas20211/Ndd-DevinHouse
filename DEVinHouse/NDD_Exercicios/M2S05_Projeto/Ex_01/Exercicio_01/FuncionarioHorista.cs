using System;
namespace Resolucao_Ex_1_Semana_5_Modulo_2
{
    // Classe FuncionarioHorista herdando da classe Empregado
    public class FuncionarioHorista : Empregado
    {
        // Atributos FuncionarioHorista
        public string cnpj { get; set; }
        public double taxa { get; set; }

        // Construtores
        // Vazio
        public FuncionarioHorista()
        {
        }

        // Com atributos
        public FuncionarioHorista(int id, string nome, string cnpj, double taxa)
            : base(id, nome)
        {
            this.cnpj = cnpj;
            this.taxa = taxa;
        }

        // M�todos FuncionarioHorista
        public void CalcularTaxas()
        {
            Console.WriteLine("M�todo CalcularTaxas() da classe FuncionarioHorista.");
        }

        public void EmitirNota()
        {
            Console.WriteLine("M�todo EmitirNota() da classe FuncionarioHorista.");
        }
    }
}