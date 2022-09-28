programa {
	/*
	 * 1) Faça um programa que leia a idade de uma pessoa expressa 
	 * em anos, meses e dias e mostre-a expressa apenas em dias.
	 */
	funcao inicio () {
		inteiro ano, mes, dia, resultado = 0
	
		escreva ("*******DESCUBRA SUA IDADE EM DIAS E MESES*******\n")
		escreva ("\nDigite sua idade em anos: ")
		leia (ano)
		escreva ("\nDigite sua idade em meses: ")
		leia (mes)
		escreva ("\nDigite sua idade em dias: ")
		leia (dia)

		resultado = (ano*365) + (mes*30) + dia

		limpa ()
		escreva ("*******RESULTADO*******\n")
		
		escreva ("\nVocê possui ", resultado ," dias de vida\n")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 597; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */