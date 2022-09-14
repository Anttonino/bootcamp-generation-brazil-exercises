programa {
	/*
	 * 2) Faça um programa que leia a idade de uma pessoa 
	 * expressa em dias e mostre-a expressa em anos, meses e dias 
	 * (considere que: 1 ano = 365 dias / 1 mês = 30 dias e 1 dia = 1 dia em todos os casos).
	 */
	funcao inicio () {
		inteiro ano, mes, dia, total
	
		escreva ("*****DESCUBRA QUAL SERIA SUA IDADE CONTADOS POR DIAS*****\n")
		escreva ("\nDigite um número de dias ")
		leia (total)

		ano = total / 365
		mes = (total % 365) / 30
		dia = (total % 365) % 30

		limpa ()
		escreva ("*****RESULTADO*****\n")
		
		escreva ("\nSua idade em anos seria: ", ano)
		escreva ("\nSua idade em meses seria: ", mes)
		escreva ("\nSua idade em dias seria: ", dia)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 22; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */