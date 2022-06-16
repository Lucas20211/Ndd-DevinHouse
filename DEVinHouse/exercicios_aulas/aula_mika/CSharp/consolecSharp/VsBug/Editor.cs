using System;
using System.Text;


namespace VsBug;

   public static class Editor
{
    public static void Start() // Modo de Editor de Texto
    {
        Console.Clear();
        System.Console.WriteLine("MODO EDI��O DE C�DIGO");
        System.Console.WriteLine("=========================");
        Run();
    }
    public static void Run() // Inicia com estrutura HTML
    {
        var htmlBuilder = new StringBuilder(string.Empty);
        htmlBuilder.Append(@"
        <!DOCTYPE html>
        <html lang ='pt-br'>
        <head>
        <meta charset = 'utf-8'>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1'>
        <title>Document</title>
        </head>
        <body>
        ");
        do
        {
            
            var text = Console.ReadLine();
            htmlBuilder.Append(text);
            htmlBuilder.Append(Environment.NewLine);
        }while (Console.ReadKey().Key != ConsoleKey.Escape);

        htmlBuilder.Append(@"
        </body>
        </html>
        ");

        SaveFile(htmlBuilder.ToString());
    }
    public static void SaveFile(string content) // Salva os arquivos HTML
    {
        var directory = new DirectoryInfo("./arquivos");
        if (!directory.Exists) 
            directory.Create();

        Console.Clear();
        Console.Write(" Informe o nome do arquivo (sem a extens�o): ");
        var fileName = Console.ReadLine();

        var file = new StreamWriter($"{directory.FullName}/{fileName}.html");
        file.Write(content);
        file.Close();

        Console.WriteLine($" O arquivo {fileName}.html foi salvo com sucesso em {directory.FullName} ");
        Console.ReadLine(); // Salva em uma pasta local
    }
}