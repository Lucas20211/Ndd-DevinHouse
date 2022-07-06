namespace modulo2_semana6_tests;

public class ExemploTest
{
    [Fact]
    public void Exemplo_Metodod_InputTrue_ReturnFalse()
    {
        var result = true;
        Assert.True(result, "Erro no método");
    }
}