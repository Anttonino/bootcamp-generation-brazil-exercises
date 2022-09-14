programa {
	/*
	 * 6) Elabore um programa que dada a idade de um nadadore classifique em uma das seguintes categorias:
	 * Infantil A = 5 a 7 anos
	 * Infantil B = 8 a 11 anos
	 * Juvenil A = 12 a 13 anos
	 * Juvenil B = 14 a 17 anos
	 * Adultes = Maiores de 18 anos
	 */
	funcao inicio () {
		inteiro idade
		
		escreva ("*****CLASSIFICAÇÃO DOS GRUPOS DE NATAÇÃO*****\n")
		escreva ("\nDigite sua idade: ")
		leia (idade)

		limpa ()
		escreva ("*****RESULTADO*****\n")

		se (idade < 5) { //Se idade for menor que 5
			escreva ("\nO Nadadore ainda não possui idade suficiente")
		} senao se (idade >= 5 e idade <= 7) { //Se idade for maior que 5 e menor que 7
			escreva ("\nO Nadadore faz parte do INFANTIL A")
		} senao se (idade >= 8 e idade <= 11) { //Se idade for maior que 8 e menor que 11
			escreva ("\nO Nadadore faz parte do INFANTIL B")
		}senao se (idade == 12 e idade == 13) { //Se idade for igual a 12 ou igual a 13
			escreva ("\nO Nadadore faz parte do JUVENIL A")
		}senao se (idade >= 14 e idade <= 17) { //Se idade for maior que 14 e menor que 17
			escreva ("\nO Nadadore faz parte do JUVENIL B")		
		}senao se (idade > 18) { //Se idade for maior que 18
			escreva ("\nO Nadadore faz parte dos ADULTOS")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 491; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */