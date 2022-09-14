programa {
	/*
	 * 3) Faça um programa que leia o tempo de duração de um evento 
	 * em uma fábrica expressa em segundos e mostre-o expresso 
	 * em horas, minutos e segundos.
	 */
	funcao inicio () {
		
		inteiro segundo, minuto, hora, total
		
		escreva ("*****DESCUBRA O TEMPO DE DURAÇÃO DO EVENTO EM HORAS E MINUTOS*****\n")
		escreva ("\nDigite o tempo de duração do evento em segundos: ")
		leia (total)

		hora = total / 3600
		minuto = (total % 3600) / 60
		segundo = (total % 3600) % 60

		limpa ()
		escreva ("*****RESULTADO*****\n")

		escreva ("\nA duração do evento em horas será: ", hora, " horas")
		escreva ("\nA duração do evento em minutos será: ", minuto, " minutos")
		escreva ("\nA duração do evento em segundos será: ", segundo, " segundos")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 180; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */