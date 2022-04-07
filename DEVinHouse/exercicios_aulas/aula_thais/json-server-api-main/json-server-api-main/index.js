const BASE_URL = 'http://localhost:8080';

const fecthApi = async (url, metodo) => {
    const response = await fetch(`${BASE_URL}/${url}` , {
        method: metodo,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    if(response.ok){
        return await response.json();
    }
    console.log('Deu erro'); 
};

const carregaProdutos = async () => {
    const data = await fecthApi('produtos', 'GET');
    if (data){
        const lista = document.getElementById('lista');

        data.forEach(produto => {
            const el = document.createElement('li');
            el.innerText = produto.nome;
            el.onclick = () => carregaProdutos(produto.id);
            lista.appendChild(el);
        });
    }
};