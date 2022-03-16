// CALCULAR A IDADE
//exiba na tela um alert contendo o texto “Sua idade é x ou y”, 
//onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, 
//e y é a idade caso ele ainda não tenha aniversariado no ano corrente.




function cliqueAqui (){             // funcao para o HTML.
    
    var anoNascido = prompt("Qual seu ano de nascimento? ");  // ano de nascimento do usuario
    var anoAtual = prompt("Qual o ano atual? ");              // ano atual que o usuario deseja colocar
    var resultado =  anoAtual - anoNascido;                   // calculo da idade
    var idade = '';                                           // definindo a idade sem valor
    var currentTime = new Date();                             // definindo o ano automatico
    var anoAtualizado = currentTime.getFullYear();            //salvando o ano automatico em uma variavel



    if(anoAtual == anoAtualizado ){                           // ano colocado pelo usuario igual ao ano atual.
        idade = resultado;
        alert("sua idade é : "+idade);       
            }   else if(anoAtual != anoAtualizado){           // ano colocado pelo usuario sendo diferente do ano atual 
                idade = anoAtual - anoNascido;               
                    alert("Sua idade é: "+idade);
            }
}