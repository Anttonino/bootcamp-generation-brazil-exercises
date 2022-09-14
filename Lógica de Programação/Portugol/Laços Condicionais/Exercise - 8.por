programa {
	/*
	 * 8) Construa um programa para ler uma variável 
	 * numérica N e imprimi-la somente se a mesma for 
	 * maior que 100, caso contrário imprimi-la com o valor zero.
	 */
	funcao inicio () {
		inteiro n
		escreva("*****LEITURA DE VALORES*****\n")
		escreva("\nO valor só será exibido se for maior que 100\n")
     	escreva ("\nDigite um valor: ")
     	leia (n)

     	limpa ()
		escreva ("*****RESULTADO*****\n")

     	se (n >= 100) { //Se o valor da variável n for maior que 100:
			escreva ("\nO valor de n é: ", n)
		} senao { //Se o valor da variável n for menor que 100:
			escreva ("\nO valor é zero")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 634; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */