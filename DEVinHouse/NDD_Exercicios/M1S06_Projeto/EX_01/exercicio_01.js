//selecionando o elemento HTML
const alteraTitle = document.getElementById('alterarTitulo');
const tituloAlterado = document.getElementById('tituloHum');

alteraTitle.addEventListener('click', () => {
    tituloAlterado.textContent ="Título alterado a partir do click.";

    setTimeout(() => {
        alteraTitle.textContent ="Alterado"
    },2000);
});
