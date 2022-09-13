programa {
	
	inclua biblioteca Matematica --> mat //Biblioteca Renomeada;

	funcao inicio () {
		
		real a, b, c, d, r, s

		escreva ("*****CÁLCULO DA EXPRESSÃO*****\n")

		escreva ("\nD = R + S / 2")
		escreva ("\nOnde...")
		escreva ("\nR = (A + B)²")
		escreva ("\nS = (B + C)² \n")
		
		
		escreva ("\nDigite o valor de A: ")
		leia (a)
		
		escreva ("\nDigite o valor de B: ")
		leia (b)

          escreva ("\nDigite o valor de C: ")
		leia (c)

		r = mat.potencia (a + b, 2.0)

		s = mat.potencia (b + c, 2.0)

		d = (r + s) / 2	

		limpa ()

		escreva ("*****RESULTADO*****\n")

		escreva ("\nValor de R é igual a ", mat.arredondar (r, 1) )
		escreva ("\nValor de S é igual a ", mat.arredondar (s, 1) )
		escreva ("\nValor de D é igual a ", mat.arredondar (d, 1) )
		
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 289; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */