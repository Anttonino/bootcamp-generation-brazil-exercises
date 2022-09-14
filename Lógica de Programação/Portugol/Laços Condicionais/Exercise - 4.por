programa {  
	/*
	 * 4) Faça um programa que leia um número inteiro e mostre uma mensagem 
	 * indicando se este número é par ou ímpar, e se é positivo ou negativo.
	 */
	funcao inicio () {
		inteiro numero
		
		escreva ("*****DESCUBRA SE O NÚMERO É IMPAR OU PAR*****\n")
		escreva ("\nDigite um número: ")
		leia (numero)

		limpa ()
		escreva ("*****RESULTADO*****\n")
		
		se (numero >= 0) { //Se o número for maior ou igual a zero:
			escreva ("\n(O número é positivo")
		} senao { //Se o número for menor que zero:
			escreva ("\n(O número é negativo")
		}
		
		se (numero % 2 == 0) { //Se o resto da divisão de número por 2 for igual a zero:
			escreva (" e par)")
		} senao { //Se o resto da divisão de número por 2 for diferente de zero:
			escreva (" e impar)")	
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */