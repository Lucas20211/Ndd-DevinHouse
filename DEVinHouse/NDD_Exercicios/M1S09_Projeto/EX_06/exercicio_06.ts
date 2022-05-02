// Para treinar classes e modificadores de acesso, em um arquivo chamado exercicio06.ts crie 2 classes. 

// - A primeira será chamada de **Conta**, ela terá os atributos *numero* do tipo numérico, *saldo* também do tipo numérico, *estaAtiva* do tipo boleano e *dono* do tipo string. Sendo eles todos **protegidos**.
// - Construa o método *construtor* recebendo todos os parâmetros correspondentes aos atributos e depois popule com esses parâmetros os atributos da classe.
// - A segunda classe se chama **ContaEmpresa** ela terá apenas o atributo *limiteDeDeposito* do tipo numérico e será **privado**, além disso ele sempre será 1000, ou seja, ele já será declarado com o valor 1000.
// - A classe **ContaEmpresa** estende a classe **Conta**.
// - Seu construtor apenas irá popular as variáveis da super classe **Conta**.
// - Na classe **ContaEmpresa** irá existir um método chamado *deposito()* que recebe um parâmetro “valor” do tipo numerico, além disso outro método será chamado *imprimeValorConta()*.
// - O método *deposito()* irá pegar o saldo da conta e somar com o valor que ele recebe como parâmetro só se tiver dentro do limite da conta.
// - Já a função *imprimeValorConta()* irá dar um console.log no saldo da conta.

// Depois da construção das classes e métodos, deposite 3500 reais chamando a função *deposito()*, sabendo que o limite máximo é 1000 antes de confirmar a soma e verifique se o valor recebido é menor ou igual a 1000. Depois disso chame a função *imprimeValorConta()* e imprima o valor total, ou seja, 3500.
