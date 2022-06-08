namespace ProjetoDev;

class Program{
    static void Main(string[] args)
    {
        string nome = "Lucas";
        string sobrenome = "Pinheiro";

        // string nomeCompleto1 = nome + " " + sobrenome;

        string nomecompleto2 = $"O meu nome completo é {nome} {sobrenome}";

        
        System.Console.WriteLine(nomecompleto2);

    }
}