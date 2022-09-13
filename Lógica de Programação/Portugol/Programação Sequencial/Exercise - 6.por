programa {
	
	inclua biblioteca Matematica --> mat
	
	funcao inicio () {

		real x1, x2, y1, y2, distancia
		
		escreva ("\n*****CALCULE A DISTÂNCIA DO EIXO X E Y DO GRÁFICO*****\n")

		escreva ("\nDistância = √(x2 - x1)² + (y2 - y1)²\n")
		
		escreva ("\nDigite o valor X1: ")
		leia (x1)
		escreva ("\nDigite o valor Y1: ")
		leia (y1)

		escreva ("\nDigite o valor X2: ")
		leia (x2)
		escreva ("\nDigite o valor Y2: ")
		leia (y2)

		distancia = mat.raiz (mat.potencia (x1 - x2, 2.0) + mat.potencia (y1 - y2, 2.0), 2.0)

		limpa ()

		escreva ("*****RESULTADO*****\n")
		
		escreva ("\nO valor da distância é: ", mat.arredondar (distancia, 2) )
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 656; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */