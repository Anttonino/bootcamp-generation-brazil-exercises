programa {
	/*
	 * 5) Faça um programa que leia as 3 notas de um aluno e calcule 
	 * a média final deste aluno. Considerar que a média é ponderada 
	 * e que o peso das notas é: 2, 3 e 5, respectivamente.
	 */
	inclua biblioteca Matematica --> mat //Biblioteca Renomeada;
	
	funcao inicio () {
		real nota_1, nota_2, nota_3, media = 0.0
		real peso_1 = 2.0, peso_2 = 3.0, peso_3 = 5.0

		escreva ("*****DESCUBRA SUA MÉDIA PONDERADA*****\n")
		escreva ("\nPrimeiro peso: 2,0 \nSegundo peso: 3,0\nTerceiro peso: 5,0\n")
		escreva ("\nDigite sua primeira nota: ")
		leia (nota_1)
		escreva ("\nDigite sua segunda nota: ")
		leia (nota_2)
		escreva ("\nDigite sua terceira nota: ")
		leia (nota_3)
		
		media += (nota_1 * peso_1 + nota_2 * peso_2 + nota_3 * peso_3) / (peso_1 + peso_2 + peso_3)

		limpa ()
		escreva ("*****RESULTADO*****\n")

		escreva ("\nO valor da sua média ponderada é: ", mat.arredondar (media, 1) )
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 925; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */