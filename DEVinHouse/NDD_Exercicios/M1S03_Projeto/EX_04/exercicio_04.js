// EXERCICIO 4  FORMULARIO COM TRUE && FALSE


//var nome = prompt("Digite seu nome");

function cliqueAqui (){
    var nome;
    var idade;
    var valor;
    // laco de repetição para declarar os valores
    do{
        nome = prompt("Digite seu nome: ");  
        idade = prompt("Digite sua idade: ");   
        valor = prompt("Digite numero de 1 a 10 :");         
    }while
    (nome == null || nome == " ");
    (idade == null || idade == "");
    (valor == null || valor == "");
    
    console.log(nome);
    console.log(idade);
    
    // UM "IF" PARA DECLARAR TRUE OR FALSE
    if((valor >= 1) && ( valor <= 10)){
        console.log(valor = true);  
    }else {
        console.log(valor = false);
    }
}





