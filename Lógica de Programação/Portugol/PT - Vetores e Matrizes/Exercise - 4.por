programa {
	/*
	 * 4) Crie um programa que receba valores do usuário para preencher uma matriz 3X3,
	 * em seguida, exiba a soma dos valores dela e a soma dos valores da primeira 
	 * diagonal, ou seja, diagonal principal 
	 */
	funcao inicio () {
		inteiro matriz [3][3], soma = 0, soma_diagonal = 0

		para (inteiro i = 0; i < 3; i++) { //Coluna da matriz
			limpa ()
			escreva ("*****EXERCÍCIO DE MATRIZ*****\n\n")
			escreva ("Linha","[", i + 1,"]\n")
			para (inteiro j = 0; j < 3; j++) { //Linha da matriz
				escreva ("\nColuna","[",j + 1 ,"] = ")
				leia (matriz [i][j])
				soma += matriz[i][j]
			}		
		}
		
		limpa ()
		escreva ("*****Matriz Criada*****\n\n")
		para (inteiro i = 0; i < 3; i++) { //Coluna da matriz
			para (inteiro j = 0; j < 3; j++) { //Linha da matriz
				escreva (matriz [i][j],"|")
			}
			
			soma_diagonal += matriz [i][i]
			escreva ("\n")
		}

		escreva ("\nSoma dos valores: ", soma)
		escreva ("\nSoma dos valores: ", soma_diagonal)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 227; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */