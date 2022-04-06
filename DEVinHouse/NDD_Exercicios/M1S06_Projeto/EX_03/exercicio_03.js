const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}

const cep = document.getElementById("cep")
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    console.log(Cep)
    let search = cep.value.replace("-", "")
    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then((response) => {
        response.json().then(data => {
            console.log(data)
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("ddd").value = data.ddd;            
            document.getElementById("localidade").value = data.localidade;
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("uf").value = data.uf;


        })
    })
})

function enviar() {
    let bairro = document.getElementById("bairro").value;
    let ddd = document.getElementById("ddd").value;    
    let localidade = document.getElementById("localidade").value;
    let logradouro = document.getElementById("logradouro").value;
    let uf = document.getElementById("uf").value;
    let json = {
        "bairro": bairro,
        "ddd": ddd,    
        "localidade": localidade,
        "logradouro": logradouro,
        "uf": uf,
    }
}
