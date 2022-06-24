namespace aula_jamill
{ 
    
    public class Program
    {
        static void Main(string[] args)
        { 
        
        }
        
        public int Id { get; set; }
        public string Nome { get; set; }    
        public DateTime DatadeNascimento { get; set; }

        public void SalvarNomeFuncionario()
        {
            Console.WriteLine($"Salvo o nome: " + Nome);
        }


    }
}