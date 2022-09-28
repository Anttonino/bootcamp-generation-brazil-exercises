programa {
	/*
	 * 2) Desenvolver um programa que efetue a soma de todos 
	 * os números ímpares que são múltiplos de três e que 
	 * se encontram no conjunto dos números de 1 até 500.
	 */
	funcao inicio () {
		inteiro n = 0 

		escreva("*****ÁNALISE NÚMERICA*****")
		para (inteiro i = 0; i < 500 ; i++){ //O laço é repetido 500 vezes			
			se (i % 2 != 0) { //Se o número for impar
			 	se (i % 3 == 0) { //Se o número for múltiplo de três
			 		escreva ("\n",i) 
			 		n = n + i
			 	}
			}
		}
		limpa ()
		escreva("\n*****RESULTADO*****\n")
		escreva ("\nA soma dos números impares multíplos de 3: ", n)
	}
} 

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */