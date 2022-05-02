// Crie um arquivo chamado exercicio10.ts, lá crie uma classe chamada **Aluno** com 3 atributos: o atributo **privado** *nome* do tipo string, o atributo **privado** *matricula* do tipo number e o atributo **público** *passou* do tipo boolean. Lá, também crie uma interface chamada **Nota** com 3 atributos: **cadeira:**string, **ponto:**number e **aluno** do tipo Aluno, classe que criamos acima. Agora em um projeto angular, na pasta **assets** adicione o arquivo exercicio10.ts e siga as instruções abaixo:

// - Na classe **Aluno**, no arquivo exercicio10.ts, cole o código abaixo:

// 		aprovado(media: number){
// 	        if(media >= 7 ){
// 	            this.passou = true;
// 	        }else{
// 	            this.passou = false;
// 	        }
// 	        return this.passou;
// 		 }
// - Faça a importação da interface e classe criada no exercicio10.ts no **app.component.ts**.
// - A classe **AppComponent** deve estender da classe **Aluno**.
// - Também na classe **AppComponent** crie 2 variáveis: *media* do tipo number e *passou* do tipo boolean.
// - No **ngOnInit** cole o código abaixo:

// 		let aluno1: Aluno = new Aluno("Jonas", 7);
// 	        let notas: Nota[] = [
// 	            {
// 	                cadeira: "Geografia",
// 	                ponto: 4,
// 	                aluno: aluno1
// 	            },
// 	            {
// 	                cadeira: "Geografia",
// 	                ponto: 8,
// 	                aluno: aluno1
// 	            },
// 	            {
// 	                cadeira: "Geografia",
// 	                ponto: 3,
// 	                aluno: aluno1
// 	            },
// 	            {
// 	                cadeira: "Geografia",
// 	                ponto: 10,
// 	                aluno: aluno1
// 	            }
// 	        ]
	       
// 	        //implemente o resto do código aqui
		       
		       
// 	        this.passou = this.aprovado(this.media);
	
// Agora onde há o comentário “implemente o resto do código aqui” faça um laço para percorrer todo o array da variável *let notas* e ir somando cada ponto para que depois seja calculada sua média. Armazene a media na variável *this.media* e imprima em tela o *this.passou* através do double mustache ( {{ }} ) no seu **app.component.html**.
