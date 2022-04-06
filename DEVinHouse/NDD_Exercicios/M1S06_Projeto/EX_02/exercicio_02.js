const n1 = document.querySelector("#numberone");
const n2 = document.querySelector("#numbertwo");
const resultado = document.querySelector("#result");

function somar(){
    resultado.innerHTML = parseInt(numberone.value) + parseInt(numbertwo.value)
}
function diminuir(){
    resultado.innerHTML = parseInt(numberone.value) - parseInt(numbertwo.value)
}
function multiplicar(){
    resultado.innerHTML = parseInt(numberone.value) * parseInt(numbertwo.value)
}
function dividir(){
    resultado.innerHTML = parseInt(numberone.value) / parseInt(numbertwo.value)
}

