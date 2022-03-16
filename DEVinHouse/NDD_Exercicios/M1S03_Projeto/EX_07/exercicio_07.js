// CALCULAR A IDADE
//exiba na tela um alert contendo o texto “Sua idade é x ou y”, 
//onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, 
//e y é a idade caso ele ainda não tenha aniversariado no ano corrente.




function cliqueAqui (){
    
    var anoNascido = prompt("Qual seu ano de nascimento? ");
    var anoAtual = prompt("Qual o ano atual? ");
    var resultado =  anoAtual - anoNascido;
    var idade = 0;
    var currentTime = new Date();
    var anoAtualizado = currentTime.getFullYear();

    if(anoAtualizado != anoAtual){
        idade = resultado - 1;
        alert("sua idade é : "+idade);
        }   else if(anoNascido > resultado){   
            alert("Sua idade é: " +resultado);
        
            }   else if(anoAtual != anoAtualizado){
                idade = resultado + 1;
                
                alert("Sua idade é: "+idade);
            }

}
