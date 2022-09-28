programa {
	/*
	 * 7) Um sistema de equações lineares do tipo:
	 * X = ce - bf / ae - bd
	 * Y = af - cd / ae bd
	 */ 
	funcao inicio () {
		inteiro A, B, C, D, E, F, x, y

		escreva ("*****SISTEMA DE EQUAÇÕES LINEARES*****\n")
		escreva ("\nFórmula: \n X = ce - bf / ae - bd")
		escreva ("\n Y = af - cd / ae bd\n")
		escreva ("\nEscreva o valor de A: ")
		leia (A)
		escreva ("\nEscreva o valor de B: ")
		leia (B)
		escreva ("\nEscreva o valor de C: ")
		leia (C)
		escreva ("\nEscreva o valor de D: ")
		leia (D)
		escreva ("\nEscreva o valor de E: ")
		leia (E)
		escreva ("\nEscreva o valor de F: ")
		leia (F)

		x = (C * E - B * F) / (A * E - B * D)
		y = (A * F - C * D) / (A * E - B * D)

		limpa ()
		escreva ("*****RESULTADO*****\n")

		escreva ("\nO valor de X é ", x ," e o valor de Y é ", y)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 112; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */