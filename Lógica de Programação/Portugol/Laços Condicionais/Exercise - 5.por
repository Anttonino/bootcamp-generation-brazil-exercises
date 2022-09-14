programa{
	/*
	 * 5) O índice de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe de 0,26 até 0,3 as 
	 * indústrias do 1º grupo são intimadas a suspenderem suas atividades, se o índice 
	 * crescer de 0,31 até 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas 
	 * atividades, se o índice atingir um valor 
	 * acima de 0,4 todos os grupos devem ser notificados a paralisarem suas atividades.
	 */
	funcao inicio () {
  		real indice
		
		escreva ("*****INDICE DE POLUIÇÃO*****\n")
		escreva ("\nO indice de 0,05 até 0,25: Sem necessidade de suspensão\n")
		escreva ("O indice de 0,26 até 0,30: industrias do primeiro grupo devem suspender seus trabalhos\n")
		escreva ("O indice de 0,31 até 0,40: industrias do primeiro e segundo grupo devem suspender seus trabalhos\n")
		escreva ("O indice acima de 0,40: Todas as industrias devem suspender seus trabalhos\n")
		escreva ("\nValor do indice: ")
		leia (indice)

		limpa ()
		escreva ("*****RESULTADO*****\n")

		se (indice <= 0.25) { //Se o indice de poluição estiver abaixo de 0,25
			escreva ("O nível de poluição está aceitável.")
		}senao se (indice <= 0.26 e indice <= 0.30) { //Se o indice de poluição estiver entre de 0,26 e 0,30
			escreva ("As indústrias do primeiro grupo devem suspender suas atividades")
		}senao se (indice <= 0.31 e indice <= 0.40) { //Se o indice de poluição estiver entre de 0,31 e 0,40
	     	escreva ("As indústrias do primeiro e do segundo grupo devem suspender suas atividades")
		}senao se(indice > 0.40) { //Se o indice de poluição estiver acima de 0,40
			escreva ("Todas as industrias devem suspender suas atividades")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 926; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */