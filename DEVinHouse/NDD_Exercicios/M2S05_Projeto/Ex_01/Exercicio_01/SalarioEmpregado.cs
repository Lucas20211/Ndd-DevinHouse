using System;
namespace Resolucao_Ex_1_Semana_5_Modulo_2
{
	// Classe SalarioEmpregado herdando da classe Empregado
	public class SalarioEmpregado : Empregado
	{
		// Atributos
		public int codigoFuncionario { get; set; }
		public double valorSalario { get; set; }

		// Construtores
		// Vazio
		public SalarioEmpregado()
		{
		}

		// Com atributos
		public SalarioEmpregado(int id, string nome, int codigoFuncionario,
			double valorSalario) : base(id, nome)
		{
			this.codigoFuncionario = codigoFuncionario;
			this.valorSalario = valorSalario;
		}

		// Métodos
		public double CalcularFolhaPagamento(double valorSalario)
		{
			return valorSalario;
		}
	}
}