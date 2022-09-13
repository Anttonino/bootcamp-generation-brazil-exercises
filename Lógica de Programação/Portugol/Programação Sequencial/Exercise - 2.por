programa {
	
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
 * @POSICAO-CURSOR = 475; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */