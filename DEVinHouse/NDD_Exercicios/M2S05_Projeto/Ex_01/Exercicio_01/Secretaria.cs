using System;
namespace Resolucao_Ex_1_Semana_5_Modulo_2
{
	// Classe Secretaria herdando da classe SalarioEmpregado
	public class Secretaria : SalarioEmpregado
	{
		// Atributos
		public int qtdAnosEmpresa { get; set; }

		// Construtores
		// Vazio
		public Secretaria()
		{
		}

		// Com atributos
		public Secretaria(int id, string nome, int codigoFuncionario,
			double valorSalario, int qtdAnosEmpresa)
			: base(id, nome, codigoFuncionario, valorSalario)
		{
			this.qtdAnosEmpresa = qtdAnosEmpresa;
		}

		// M�todos
		public void AtenderCliente()
		{
			Console.WriteLine("M�todo AtenderCliente() da classe Secretaria.");
		}

		public void RealizarLigacoes()
		{
			Console.WriteLine("M�todo RealizarLigacoes() da classe Secretaria.");
		}
	}
}