programa {
	/*
	 * 1) João comprou um microcomputador para controlar o rendimento diário de seu trabalho.
	 * Toda vez que ele traz um peso de tomate maior que o estabelecido pelo regulamento do estado
	 * de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente.
	 * João precisa que você faça um sistema que leia a variável P (peso de tomates) e verifique se há excesso.
	 * Se houver, gravar na variável E (Excesso) e na variável M o valor da multa que João deverá pagar.
	 * Caso contrário mostrar tais variáveis com o conteúdo ZERO.
	 */
	funcao inicio () {
		real peso, excedente = 0.0, multa = 0.0
		
		escreva ("*****BALANÇA DE LEGUMES E FRUTAS*****\n")
		escreva ("\nLembre-se que se o peso ultrapassar 50KG será adicionado R$4 a cada kilo excedido\n")
		escreva ("\nDigite o peso das compras: ") 
		leia (peso)
		
		limpa()
		escreva ("*****RESULTADO*****\n")
        	
        	se (peso <= 50) { //Se o peso for menor ou igual a 50KG
        		escreva("Não houve multa no peso ", peso, "KG")
        	} senao { //Se o peso ultrapassar o limite de 50KG
        		excedente = peso - 50
        		multa = excedente * 4
        		escreva("O peso ", peso,"KG ultrapassou o limite\nO valor da multa é de R$", multa)
        	}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 19; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */