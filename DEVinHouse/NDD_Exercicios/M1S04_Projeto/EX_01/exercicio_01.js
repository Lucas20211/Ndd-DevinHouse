
var idade = parseInt(prompt('Digite a idade: '));

if(idade <= 15){
    console.log('Você é Jovem. ');
}else if((idade >= 16)&&(idade <= 64)){
    console.log('Você é Adulto. ');
}else if(idade >= 65){
    console.log('Você é Idoso. ');
}else{
    console.log('Idade invalida!');
}
