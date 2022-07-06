using System;
namespace Resolucao_Ex_1_Semana_5_Modulo_2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Instância de todos os objetos, um de cada classe
            Empregado objEmpregado = new Empregado(1, "Marcio");
            SalarioEmpregado objSalarioEmpregado = new SalarioEmpregado(2, "João", 2, 1.500);
            FuncionarioHorista objFuncionarioHorista = new FuncionarioHorista(3, "Roberto", "1010101", 0.05);
            Secretaria objSecretaria = new Secretaria(4, "Joana", 4, 2.000, 5);

            // Impressões objeto classe Empregado
            Console.WriteLine($"" +
                $"\n----------- Objeto Empregado -----------\n" +
                $"- ID: {objEmpregado.id}\n" +
                $"- Nome: {objEmpregado.nome}\n" +
                $"- Métodos do objeto Empregado...\n");

            // Todos os métodos Empregado
            objEmpregado.Trabalhar();
            objEmpregado.IrEmbora();
            objEmpregado.TirarFolga();

            // Impressões objeto classe SalarioEmpregado
            Console.WriteLine($"" +
                $"\n-------- Objeto SalarioEmpregado --------\n" +
                $"- ID: {objSalarioEmpregado.id}\n" +
                $"- Nome: {objSalarioEmpregado.nome}\n" +
                $"- Código Funcionario: {objSalarioEmpregado.codigoFuncionario}\n" +
                $"- Valor Salário: {objSalarioEmpregado.valorSalario}\n" +
                $"- Métodos do objeto SalarioEmpregado...\n");

            // Todos os métodos SalarioEmpregado (inclusive herdados)
            objSalarioEmpregado.Trabalhar();
            objSalarioEmpregado.IrEmbora();
            objSalarioEmpregado.TirarFolga();
            Console.WriteLine($"Retorno Método Calculo Folha Pagamento: {objSalarioEmpregado.CalcularFolhaPagamento(100)}");

            // Impressões objeto classe FuncionarioHorista
            Console.WriteLine($"" +
                $"\n-------- Objeto FuncionarioHorista --------\n" +
                $"- ID: {objFuncionarioHorista.id}\n" +
                $"- Nome: {objFuncionarioHorista.nome}\n" +
                $"- CNPJ: {objFuncionarioHorista.cnpj}\n" +
                $"- Taxa: {objFuncionarioHorista.taxa}\n" +
                $"- Métodos do objeto FuncionarioHorista...\n");

            // Todos os métodos FuncionarioHorista (inclusive herdados)
            objFuncionarioHorista.Trabalhar();
            objFuncionarioHorista.IrEmbora();
            objFuncionarioHorista.TirarFolga();
            objFuncionarioHorista.CalcularTaxas();
            objFuncionarioHorista.EmitirNota();

            // Impressões objeto classe Secretaria
            Console.WriteLine($"" +
                $"\n-------- Objeto Secretaria --------\n" +
                $"- ID: {objSecretaria.id}\n" +
                $"- Nome: {objSecretaria.nome}\n" +
                $"- Código Funcionario: {objSecretaria.codigoFuncionario}\n" +
                $"- Valor Salário: {objSecretaria.valorSalario}\n" +
                $"- Quantos anos de empresa: {objSecretaria.qtdAnosEmpresa}\n" +
                $"- Métodos do objeto Secretaria...\n");

            // Todos os métodos Secretaria (inclusive herdados)
            objSecretaria.Trabalhar();
            objSecretaria.IrEmbora();
            objSecretaria.TirarFolga();
            objSecretaria.CalcularFolhaPagamento(100);
            objSecretaria.AtenderCliente();
            objSecretaria.RealizarLigacoes();
        }
    }
}