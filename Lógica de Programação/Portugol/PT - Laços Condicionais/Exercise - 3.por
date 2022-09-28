programa {
	/*
	 * 3) Desenvolva um programa em que:
	 * Leia 4 (quatro) números;
	 * Calcule o quadrado de cada um;
	 * Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
	 * Caso contrário, imprima os valores lidos e seus respectivos quadrados.
	 */
	inclua biblioteca Matematica --> mat
	
	funcao inicio () {
		real n1, n2, n3, n4

		escreva ("*****PROGRAMA DE ÁNALISE NÚMERICA*****\n")
		escreva ("\nSe o valor resultante do quadrado do terceiro for maior ou igual a 1000, imprima-o e finalize;")
		escreva ("\nCaso contrário, imprima os valores lidos e seus respectivos quadrados.\n")
		escreva ("\nDigite o primeiro número: ")
		leia (n1)
		escreva ("\nDigite o Segundo número: ")
		leia (n2)
		escreva ("\nDigite o Terceiro número: ")
		leia (n3)
		escreva ("\nDigite o Quarto número: ")
		leia (n4)

		n1 = mat.potencia (n1, 2.0)
		n2 = mat.potencia (n2, 2.0)
		n3 = mat.potencia (n3, 2.0)
		n4 = mat.potencia (n4, 2.0)

		limpa ()
		escreva ("*****RESULTADO*****\n")

		se (n3 >= 1000) { //Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
			escreva ("\nSe o valor do teceiro número for maior que 1000, exiba-o\n")
			escreva ("\nNúmero 3: ", n3)
		} senao { //Caso contrário, imprima os valores lidos e seus respectivos quadrados.
			escreva ("\nPrimeiro número: ", n1)
			escreva ("\nSegundo número: ", n2)
			escreva ("\nTerceiro número: ", n3)
			escreva ("\nQuarto número: ", n4)
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1465; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */