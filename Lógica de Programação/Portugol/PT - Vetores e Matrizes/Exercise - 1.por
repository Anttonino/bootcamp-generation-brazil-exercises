programa {
	/*
	 * 1) Faça um programa que crie um vetor por leitura com 5 valores de pontuação de uma 	
	 * atividade e o escreva em seguida. Encontre após a maior pontuação e a apresente. 
	 */
	funcao inicio () {
		real nota [5], maior = 0.0

		escreva ("*****CADASTRO DE NOTAS*****\n\n")

		para (inteiro i = 0; i < 5; i++) { // O laço será repetido 5x
			escreva ("Digite a Nota do aluno", "[", i+1, "]: ") // I+1 serve para exibir a contagem do vetor a partir de 1 
			leia (nota [i]) //Cada posição do vetor será preenchida com o valor. O vetor tem 5 posições e o laço será repetido 5x.

			se (nota [i] > maior) { //Se a nota inserida no vetor for maior que a anterior, o valor será substituido até o laço encerrar
				maior = nota [i] 
			}
		}
	
		limpa ()
		escreva ("*****RESULTADOS*****\n")
		escreva ("\nA maior nota da turma foi: ", maior, "\n")

		para (inteiro i = 0; i < 5; i++) { // O laço será repetido 5x
		escreva ("\nA nota do aluno", "[", i+1, "]", " foi: ", nota [i])
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 668; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */