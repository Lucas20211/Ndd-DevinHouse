namespace VsBug;

class Program
{
    public static void Main(string[] args)
    {
        Console.Clear();
        System.Console.WriteLine(" MODO EDIÇÃO DE CÓDIGO ");
        System.Console.WriteLine(" ================================= ");
        Run();
    }

    private static void Run()
    {
       var htmlbuilder = new StringBuilder(string.Empty);
       htmlbuilder.Append(@"
        <!DOCTYPE html>
        <html lang='en'>
        <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
            </head>
            <body>"

       );
       do{

       }while(true);

       htmlbuilder.Append(@"
       </body>
       </html>
       ");
    }
}
    