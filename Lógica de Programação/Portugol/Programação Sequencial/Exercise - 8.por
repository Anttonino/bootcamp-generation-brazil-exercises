programa {
		
	inclua biblioteca Matematica --> mat
	
	funcao inicio() {
		
		real valor, distribuidora, imposto, valor_final
		
		escreva ("*****CÁLCULO DO VALOR DO CARRO*****\n")

		escreva ("\nDigite o valor do carro: R$")
		leia (valor)

		distribuidora = valor * 0.28
		imposto = valor * 0.45

		valor_final = valor + imposto + distribuidora

		limpa ()

		escreva ("*****RESULTADO*****\n")
		
		escreva ("\nO valor final do carro foi R$", mat.arredondar (valor_final, 2) )
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 477; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */