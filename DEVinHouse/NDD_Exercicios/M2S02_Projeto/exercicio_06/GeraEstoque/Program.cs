using System.Text;

namespace GeraEstoque;
class Program
{
    static void Main(string[] args)
    {
        System.Console.WriteLine("Seja Bem-Vindo ao GeraEstoque 1.0");
        System.Console.WriteLine("---------------------------------------");
        System.Console.WriteLine(@"
        1  Cadastrar produto
        2  Consultar produto
        3  Modificar produto
        4  Excluir produto
        0  Sair
        ");

        var option = Console.ReadLine();

        switch (option)
	{
            case "1": 
                //CadastarProduto();
                break;
            case "2": 
                //ConsultarProduto();
                break;
            case "3":
                //ModificarProduto();
                break;
            case "4":
                //ExcluirProduto();
                break;
            case "0":
                //SairdoMenu();
                break;
		
            default:
                // Escape;
            break;
	}
        
    }
}

