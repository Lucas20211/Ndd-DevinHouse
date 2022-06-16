using System;
using System.Text;
using System.Linq;

namespace VsBug;

    public static class Menu 
{
    public static void Show()
    {
        Console.Clear();
        DrawCanvas();
        ShowOptions();

        var option = Console.ReadLine();
        
        switch (option)
        {
            case "1":
                Editor.Start(); Show();
                break;
            case "2":

                break;
            case "0":
                {
                    Console.Clear();
                    Environment.Exit(0);
                    break;
                }
            default:
                Show();
                break;
        }       
    }
    static void DrawCanvas()
    {
        
        PrintHorizontLine();
        for (int i = 0; i < 20; i++)
        {
            Console.Write("|");
            for (int lineh = 0; lineh <= 30; lineh++)
            {Console.Write(" ");}
            Console.Write("|");
            Console.Write(Environment.NewLine);
        }
        PrintHorizontLine();
    }
    static void ShowOptions()
    {
        Console.SetCursorPosition(2,2);
        System.Console.WriteLine("VsBug EDITOR v0.1");
        Console.SetCursorPosition(2, 3);
        System.Console.WriteLine("=================");
        Console.SetCursorPosition(2, 5);
        System.Console.WriteLine("1 - Novo arquivo");
        Console.SetCursorPosition(2, 6);
        System.Console.WriteLine("2 - Ler arquivo");
        Console.SetCursorPosition(2, 7);
        System.Console.WriteLine("0s - Sair");
        Console.SetCursorPosition(2, 9);
        System.Console.Write("Opção selecionada: ");
    }
    static void PrintHorizontLine()
    {
        Console.Write("+");

        for (int i = 0; i <= 30; i++)
        {
            System.Console.Write("-");
        }
        Console.Write("+");
        Console.Write(Environment.NewLine);
    }

}