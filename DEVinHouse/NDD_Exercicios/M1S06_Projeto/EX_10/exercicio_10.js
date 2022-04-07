
    const itenAzul = document.querySelectorAll('.azul');
    const itenVermelho = document.querySelectorAll('.vermelho');
    const btn = document.querySelector('#btn');
    const classes = document.querySelectorAll('li');


    btn.addEventListener('click',function clique(){

        itenAzul = itenVermelho;

    });