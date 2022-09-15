programa {
	/*
	 * 5) Faça um programa que mostre uma contagem na tela de 233 a 457, 
	 * contando de 5 em 5, mas quando estiver de 300 e 400 contar de 3 em 3.
	 */
	funcao inicio () {
		inteiro n = 233
		
		escreva ("*****REPETIÇÃO DE VALORES*****\n")
		escreva ("\nContagem de valores de 5 em 5")
		escreva ("\nA contagem será feite de 3 em 3 quando o valor estiver entre 300 e 400\n")		
		escreva ("\nValor inicia em ", n)
		
		faca { //Faça o algoritmo abaixo até n alcançar o número 457
			n += 5	
			escreva ("\n", n)			
			
			se (n >= 300 e n <= 400) { //Quando n estiver entre os números 300 e 400
				n += 3 + 5 
			}
		} enquanto ( n < 457) //Condição de parada do laço
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 9; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */