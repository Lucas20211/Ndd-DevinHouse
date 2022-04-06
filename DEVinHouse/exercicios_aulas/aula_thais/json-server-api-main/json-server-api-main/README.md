# Projeto contendo umplementação de uma FakeAPI utilizando [json-server](https://www.npmjs.com/package/json-server)

## Para implementação foi utilizado como base o artigo [Simulando uma API REST com JSON Server de maneira simples](https://www.fabricadecodigo.com/json-server/)

## Para instalar as depenencias do projeto deve ser executado o comando:

```
yarn
```

## Para inicializar o servidor deve ser executado o comando:

```
yarn start
```

## Rotas

| Request | URL         | Detalhes                            |
| ------- | ----------- | ----------------------------------- |
| GET     | /produtos   | Busca todos os produtos             |
| GET     | /produtos/1 | Busca um produto                    |
| POST    | /produtos   | Salva um produto                    |
| PUT     | /produtos/1 | Atualiza dos os dados do produto    |
| PATCH   | /produtos/1 | Atualiza parte dos dados do produto |
| DELETE  | /produtos/1 | Remove um produto                   |

### As rotas vão ser compostas pelo endereço base (localhost:3000) mais o recurso que dev ser acessado com por exemplo “produtos”.

## Exemplos:

### 1: Buscar todos os produtos

```
// Dados de envio
GET http://localhost:3000/produtos

// Resultado
[
    {
        "id": 1,
        "nome": "Hambúrguer",
        "descricao": "Pão, bife de hambúrguer 90g, salada e batata.",
        "preco": 8.5,
        "categoria_id": 1
    },
]
```

### 2: Buscar apenas um produto

```
// Dados de envio
GET http://localhost:3000/produtos/1

// Resultado
{
    "id": 1,
    "nome": "Hambúrguer",
    "descricao": "Pão, bife de hambúrguer 90g, salada e batata.",
    "preco": 8.5,
    "categoria_id": 1
}
```

### 3: Salvar um produto

```
// Dados de envio
POST http://localhost:3000/produtos
{
    "nome": "Hambúrguer de frango",
    "descricao": "Pão, bife de hambúrguer 90g de frango, salada e batata.",
    "preco": 9.5,
    "categoria_id": 1
}

// Resultado
{
    "nome": "Hambúrguer de frango",
    "descricao": "Pão, bife de hambúrguer 90g de frango, salada e batata.",
    "preco": 9.5,
    "categoria_id": 1,
    "id": 7
}
```

### 4: Alterar um produto

```
// Dados de envio
PUT http://localhost:3000/produtos/1
{
    "nome": "Hambúrguer de frango",
    "descricao": "Pão, bife de hambúrguer 90g de frango, salada e batata.",
    "preco": 10.5,
    "categoria_id": 1
}

// Resultado
{
    "nome": "Hambúrguer de frango",
    "descricao": "Pão, bife de hambúrguer 90g de frango, salada e batata.",
    "preco": 10.5,
    "categoria_id": 1,
    "id": 1
}
```

### 5: Alterar apenas o nome de um produto

```
// Dados de envio
PATCH http://localhost:3000/produtos/1
{
    "nome": "Hambúrguer de frango artezanal"
}

// Resultado
{
    "nome": "Hambúrguer de frango artezanal",
    "descricao": "Pão, bife de hambúrguer 90g de frango, salada e batata.",
    "preco": 10.5,
    "categoria_id": 1,
    "id": 1
}
```

### 6: Excluir um produto

```
// Dados de envio
DELETE http://localhost:3000/produtos/1

// Resultado
Status: 200 OK
```
