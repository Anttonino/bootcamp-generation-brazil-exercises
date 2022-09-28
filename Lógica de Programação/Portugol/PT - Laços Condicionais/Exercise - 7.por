programa {
	/*
	 * 7) Receber valores de base e altura de um triângulo e verificar 
	 * se são valores válidos (positivos maiores que zero). 
	 * Em caso afirmativo, calcular a área do triângulo (fórmula padrão).
	 */
	funcao inicio () {
		inteiro base, altura, area
		
		escreva ("*****DESCUBRA A ÁREA DO TRIÂNGULO*****\n")
		escreva ("\nDigite o valor da base: ")
		leia (base)
		escreva("\nDigite o valor da altura: ")
		leia (altura)

		area = (base * altura) / 2

		limpa ()
		escreva ("*****RESULTADO*****\n")
		
		se (base >= 1 e altura >= 1) { //Se a base e altura forem iguais ou maiores que 1:
			escreva ("\nA área do triângulo é: ",area)
		} senao { //Se base e altura forem menores do que 1:
			escreva ("\nERROR! Valores inválidos")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 543; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */