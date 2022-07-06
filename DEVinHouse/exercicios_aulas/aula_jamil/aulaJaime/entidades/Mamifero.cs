using System;


namespace aulaJaime.entidades
{
    public class Mamifero : Animal
    {
        public int Velocidade { get; set; }

        public Mamifero(string nome, int velocidade) :base(nome)
        {
            Velocidade = velocidade;
        }
        

        public void Correr()
        {
            Console.WriteLine("Correndo");
        }
    }
}
