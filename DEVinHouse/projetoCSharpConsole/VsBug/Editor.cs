using System;
using System.Text;
using System.Linq;

namespace VsBug;

   public static class Editor
{
    public static void Start()
    {
        Console.Clear();
        System.Console.WriteLine("MODO EDIÇÃO DE CÓDIGO");
        System.Console.WriteLine("=========================");
        Run();
    }
    public static void Run()
    {
        var htmlBuilder = new StringBuilder(string.Empty);
        htmlBuilder.Append(@"
        <!doctype html>
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
    public static void SaveFile(string content)
    {
        var directory = new DirectoryInfo("./arquivos");
        if (!directory.Exists) //Verificação se não existir arquivo
            directory.Create();

        Console.Clear();
        Console.Write(" Informe o nome do arquivo (sem a extensão): ");
        var fileName = Console.ReadLine();

        var file = new StreamWriter($"{directory.FullName}/{fileName}.html");
        file.Write(content);
        file.Close();

        Console.WriteLine($" O arquivo {fileName}.html foi salvo com sucesso em {directory.FullName} ");
        Console.ReadLine();
    }
}